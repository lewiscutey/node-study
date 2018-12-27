/* var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('README.md')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('README.md.gz'));


console.log('压缩完成！'); */

/* const fs = require("fs")

//可读数据流
//==========================================
let data = ''
//创建可读流
let readerStream = fs.createReadStream('./README.md')

// 设置编码为 utf8
readerStream.setEncoding('UTF8')

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk
})

readerStream.on('end',function(){
   console.log(data)
})

readerStream.on('error', function(err){
   console.log(err.stack)
})

console.log("程序执行完毕") */

const fs = require('fs')
const file = fs.readFileSync('./README.md', {encoding: 'utf8'})
fs.writeFileSync('./TEST.md', file)