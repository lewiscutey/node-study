var fs=require('fs');
var file="/Users/lewis/Documents/项目/Github/node-study/express-demo/test/haidian(2).json";
var result=JSON.parse(fs.readFileSync(file));
console.log(result);