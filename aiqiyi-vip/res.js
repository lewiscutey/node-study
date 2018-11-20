var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
  fs.open('./data.json', 'r', (err, fd) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error('文件不存在');
        return;
      }
  
      throw err;
    }
  
    response.end(fd);
  });
  
}).listen(9996);