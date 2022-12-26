const fs = require('fs');
const path = require('path')
const FS = {
   existsSync: fs.existsSync,
   
   readFile: file => {
      return new Promise((resolve, reject) => {
         fs.readFile(file, (err, data) => {
            err ? reject(err) : resolve(data.toString('utf-8'))
         });
      });
   },

   writeFile: (file, content) => {
      return new Promise((resole, reject) => {
         fs.writeFile(file, content, err => {
            err ? reject(err) : resole()
         });
      });
   },

   readDir: dir => {
      return new Promise((resole, reject) => {
         fs.readdir(dir, (err, files) => {
            err ? reject(err) : resole(files);
         });
      });
   },

   isDir: filename => {
      return new Promise((resole, reject) => {
         fs.stat(filename, (err, stats) => {
            err ? reject(err) : resole(stats.isDirectory());
         });
      });
   },

   mkdir: dir => {
      return new Promise((resole, reject) => {
         fs.exists(dir, e => {
            if(e) {
               resole();
            } else {
               fs.mkdir(dir, err => {
                  err ? reject(err) : resole();
               });
            }
         });
      });
   }

   
}

module.exports = FS;