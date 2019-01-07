const net = require('net');

process.stdin.resume()
process.stdin.setEncoding('utf8');

const client = net.connect({port: 8092}, () => {
  console.log('连接服务器');
  // 获取输入的字符串
  console.log('input: ')
  process.stdin.on('data', (data) => {
    // 发送输入的字符串到服务器
    console.log('input: ')
    client.write(data)
    // 输入 'close' 字符串时关闭连接
    if (data === 'close\n') {
      client.end()
    }
  });
})
// 接收服务端的数据
client.on('data', (data) => {
  console.log('接收服务端的数据: ', data.toString())
})
// 断开连接
client.on('end', () => {
  console.log('断开连接');
  // 退出客户端程序
  process.exit()
})