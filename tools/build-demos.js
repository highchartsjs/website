const path = require('path');
const config = require('dotenv').config({
	path: path.join(__dirname, '../.env')
});
const _env = config.parsed;
const walk = require('walk');

const FS = require('../helper/fs');
const Products = require('../data/products.json');
const DemoService = require("../service/DemoSerive");
let SampleDist = null;


async function walkDir(dir) {
   return new Promise((resolve, reject) => {
      let walker = walk.walk(dir, {
         followLinks: true
      }),
         result = {

         };

      walker.on('file', (root, stat, next) => {
         let relativePath = root.replace(dir, '');
         if (!result[relativePath]) {
            result[relativePath] = [];
         }

         result[relativePath].push(stat.name);
         next();
      });

      walker.on('end', () => {
         resolve(result);
      });
   });
}

/**
 * 
 * 处理 Highcharts 仓库里的例子工具类
 * 例子存储地址：Highcharts 仓库（配置再 .env HIGHCHARTS_PATH ）的 samples/{product} 目录
 * 最终将数据存放再 /data/sampels 目录（配置在 .env HIGHCHARTS_SAMPLE_RESULT_PATH）
 * 
 */



const main = async (HighchartsVersion, env) => {

	SampleDist = path.join(process.cwd(), _env.HIGHCHARTS_SAMPLE_RESULT_PATH);

   let product,
      root,
      demos,
      pathCache,
      counter,
      demo,
      result,
      tmp,
      demoCategory,
      demoName,
      demoPath,
      start = null;

   for (product in Products) {
      pathCache = {};
      counter = 0;
      start = new Date().getTime();

      // /highcharts_get/samples/{product}
      root = path.join(_env.HIGHCHARTS_PATH, 'samples', product);

      demos = await walkDir(root);

      // 创建 /data/samples/{product} 目录
      await FS.mkdir(path.join(SampleDist, product));


      for (demo in demos) {
         if (demos[demo].length > 2) {
            counter++;

            // 读取并解析 samples 数据
            result = await DemoService.getDetail(path.join(root, demo), null, null, HighchartsVersion);

            // demo 分类及名字（demo 例如 '\\3d\\area'）
            tmp = demo.split(path.sep);
            demoCategory = tmp[1];
            demoName = tmp[2];

            // demo 存放目录
            demoPath = path.join(SampleDist, product, demoCategory);

            if (!pathCache[demoCategory]) {
               await FS.mkdir(demoPath);
               pathCache[demoCategory] = true;
            }

            // 写入 demo 数据
            await FS.writeFile(demoPath + path.sep + demoName + '.json', JSON.stringify(result));
         }
      }

      console.log(product + ': ' + counter + ', ' + (new Date().getTime() - start) / 1000 + ' s');
   }

   console.log('done!');

}



if(module.exports) {
	module.exports =main;
} else {
	main();
}