const child_process = require('child_process');



module.exports = {
   
   exec: cmd => {
      return new Promise((resolve, reject) => {
         child_process.exec(cmd, (err, stdout, stderr) => {
            err ? reject(stderr) : resolve(stdout);
         })
      })
   }
}