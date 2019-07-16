const http = require('http')
let options = {
  hostname: 'www.example.com',
  port: 80,
  path: '/',
  method: 'GET'
}

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`) //返回状态码
  console.log(`HEADERS: ${JSON.stringify(res.headers, null, 4)}`) // 返回头部
  res.setEncoding('utf8') // 设置编码
  res.on('data', (chunk) => { //监听 'data' 事件
    console.log(`主体: ${chunk}`)
  })

})

req.end() // end方法结束请求