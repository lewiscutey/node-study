var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

// app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
  superagent.get('https://bj.meituan.com/meishi/')
    .end(function (err, sres) {
      // 常规的错误处理
      if (err) {
        return next(err);
      }
      // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
      // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
      // 剩下就都是 jquery 的内容了
      var $ = cheerio.load(sres.text);
      var items = [];
      $('#app .poiList-wrap .left .filter li').each(function (idx, element) {
        var $element = $(element);
        items.push({
          title: $element.find('a').text(),
          href: $element.find('a').attr('href')
        });
      });
      console.log(items);
      // res.send(items);
    });
// });

// app.listen(3006, function(){
//     console.log('listen port 3002');
// });
