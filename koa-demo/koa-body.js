const Koa = require('koa')
const koaBody = require('koa-body')
const Router = require('koa-router')
let router = new Router()

const app = new Koa()


router.get('/index', koaBody(), async (ctx, next) => {
  // await next();
  console.log('1111', ctx)
}).get('/about', (ctx) => {
  ctx.status = 200
  console.log('2222', ctx)
})


app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
})