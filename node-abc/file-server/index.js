const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');
const mime = require('mime');

const hostname = 'localhost';
const port = 4004;

const server = http.createServer((req, res) => {
  if(req.url == '/favicon.ico') return //不响应favicon请求
  // 获取url->patnname 即文件名
  let pathname = path.join(__dirname, url.parse(req.url).pathname);
  pathname = decodeURIComponent(pathname) // url解码，防止中文路径出错
  console.log(pathname) // .../node-abc/lesson4/file-server/ 请求的pathname
  /**
   * 判断文件是否是文件夹
   * 是：返回文件列表
   * 否：读取文件内容
   */
   // stat方法的参数是一个文件或目录，它产生一个对象，该对象包含了该文件或目录的具体信息。我们往往通过该方法，判断正在处理的到底是一个文件，还是一个目录，这儿使用的是它的同步版本
   if(fs.statSync(pathname).isDirectory()){
    // 设置响应头
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    fs.readdir(pathname, (err, files)=>{
        res.write('<ul>')
        files.forEach((item)=>{
            // 处理路径
            let link = path.join(url.parse(req.url).pathname, item)
            res.write(`<li><a href="${link}">${item}</a></li>`)
        })
        res.end('</ul>')
    })
  } else{
    // 以binary读取文件
    fs.readFile(pathname, 'binary', (err, data)=>{
      if(err){
        res.writeHead(500, { 'Content-Type': 'text/plain'})
        res.end(JSON.stringify(err))
        return false
      }
      res.writeHead(200, { 
        'Content-Type': `${mime.getType(pathname)};charset:UTF-8`
      })
      res.write(data, 'binary')
      res.end()
    })
  }
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}`)
});