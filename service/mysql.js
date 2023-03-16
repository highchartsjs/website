

const mysql = require('mysql');

console.log({
   connectionLimit: 5,
   host: process.env.MYSQL_HOST,
   user: process.env.MYSQL_USER,
   password: process.env.MYSQL_PWD,
   database: process.env.MYSQL_DB
})


const pool = mysql.createPool({
   connectionLimit: 5,
   host: '192.168.1.3',
   user: 'root',
   password: '123456',
   database: 'jianshukeji'
});

/*{
   connectionLimit: 5,
   host: process.env.MYSQL_HOST,
   user: process.env.MYSQL_USER,
   password: process.env.MYSQL_PWD,
   database: process.env.MYSQL_DB
});*/

const MYSQL = {

   query: (sql, data) => {
      return new Promise((resovle, reject) => {
         pool.query(sql, data, (err, results, fields) => {
            err ? reject(err) : resovle([results, fields]);
         });
      })
   },

   getObj: (row, fields) => {
      let obj = {},
         name = null;
      fields.forEach(f => {
         name = f.name;
         obj[name] = row[name];
      });
      return obj;
   },

   getParentObj: (rows, fields) => {
      let parent = [],
         parentIdMap = {},
         tmp = null;

      rows.forEach(row => {
         if(row.parent === 0) {
            tmp = MYSQL.getObj(row, fields);
            tmp.children = [];
            parentIdMap[row.id] = parent.length;
            parent.push(tmp);
         }
      });

      rows.forEach(row => {
         if(row.parent) {
            if(!parentIdMap[row.parent]) {
               return false;
            }
            parent[parentIdMap[row.parent]].children.push(MYSQL.getObj(row, fields));
         }
      });

      return parent;
   }
};
module.exports = MYSQL;
