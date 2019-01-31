const Koa = require('koa');
const bodyparser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyparser());

app.use(async ctx => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    // 当GET请求时候返回表单页面
    let html = `
      <h1>koa-bodyparser</h1>
      <form method="POST" action="/">
        Name:<input name="name" /><br/>
        Age:<input name="age" /><br/>
        Email: <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
    ctx.body = ctx.request.body
  } else {
    // 404
    ctx.body = '<h1>404 Not Found</h1>'
  }
})

app.listen(3013)