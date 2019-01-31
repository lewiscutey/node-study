const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


// app.use(async ctx => {
//   let _htmnl = "error 404";
//   switch (ctx.url) {
//     case '/': _htmnl = 'index'; break;
//     case '/about': _htmnl = 'about'; break;
//     case '/contact': _htmnl = 'contact'; break;
//     default: break;
//   };
//   ctx.body = _htmnl;
// });

// router.get('/', ctx => {
//   let html = `
//       <ul>
//         <li><a href="/hello">helloworld</a></li>
//         <li><a href="/about">about</a></li>
//       </ul>
//     `
//   ctx.body = html
// }).get('/index', ctx => {
//   ctx.body = '<h1>index</h1>';
// }).get('/about', ctx => {
//   ctx.body = '<h1>about</h1>';
// }).get('/hello', ctx => {
//   ctx.body = '<h1>world</h1>';
// });

// app.use(router.routes(), router.allowedMethods());


// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3008);


