const Koa = require('koa');
const static = require('koa-static');
const path = require('path');

const app = new Koa();

const staticPath = '/static';

app.use(static(
  path.join(__dirname, staticPath)
))

app.use(async ctx => {
  ctx.body = 'hello static'
})

app.listen(3011);