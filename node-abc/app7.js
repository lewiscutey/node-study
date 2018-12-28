const readline = require('readline');

/* 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('你叫什么名字？', (answer) => {
  // 对答案进行处理
  console.log(`你好：${answer}`);

  rl.close();
}); */


/* const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('log.txt'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`文件的单行内容：${line}`);
}); */

// 先来实现一个可交互命令行
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'search>>> '
})

rl.prompt()

rl.on('line', (line) => {
  console.log(line)
  rl.prompt()
}).on('close', () => {
  console.log('再见!')
  process.exit(0)
})
