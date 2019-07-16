const fs = require('fs');
const path = require('path');

/* 
// 异步读取
fs.readFile('README.md', function (err, data) {
   if (err) {
     return console.error(err)
   }
   console.log("异步读取: " + data.toString())
})
console.log("程序执行完毕。") 
*/

/* // 同步读取
const data = fs.readFileSync('README.md');
console.log("同步读取: " + data.toString())
console.log("程序执行完毕。") */

/* 
// 写文件
fs.writeFile('README.md', 'Hello Node.js', {flag: 'a+'}, (err) => {
  if (err) throw err
  console.log('It\'s saved!')
})
 */

/* // 打开文件
fs.open('README.md', 'r+', function(err, fd) {
   if (err) {
       return console.error(err)
   }
  console.log("文件打开成功！")
}) */

/* // 读取文件
let buf = new Buffer(1024)
fs.open('README.md', 'r+', function(err, fd) {
   if (err) {
       return console.error(err)
   }
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.error(err);
      }
      console.log(bytes + "  字节被读取")
      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString())
      }
   })
}) */

// 读取目录

/* 
// 同步读取
function travel(dir, callback) {
  fs.readdirSync(dir).forEach(function (file) {
      var pathname = path.join(dir, file)

      if (fs.statSync(pathname).isDirectory()) {
          travel(pathname, callback)
      } else {
          callback(pathname)
      }
  })
} */

/* // 异步读取
function travel(dir, callback) {
  fs.readdir(dir, function(err, files){
    files.forEach(function(file){
      var pathname = path.join(dir, file)
      if (fs.statSync(pathname).isDirectory()) {
          travel(pathname, callback)
      } else {
          callback(pathname)
      }
    });
  });
} */

/* travel(__dirname, function (pathname) {
  console.log(pathname)
}) */

