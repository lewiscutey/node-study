const Koa = require('koa');
const path = require('path');
const views = require('koa-views');

const app = new Koa();

app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}));

app.use(async ctx => {
  let title = 'Koa2';
  await ctx.render('index', {
    title,
  })
});

app.listen(3010);