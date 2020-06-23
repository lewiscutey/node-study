var path = require("path")
var koa = require("koa"),
    serve = require("koa-static-router"),
    app = new koa();
const http = require('http');
const rewrite = require('koa-rewrite');

app.use(rewrite('/js/(.*)', '/zips/js/$1'));
app.use(rewrite('/fonts/(.*)', '/zips/fonts/$1'));

app.use(serve([
 {
  dir:'web',
  router:'/web/'   
},{
  dir:'zips',
  router:'/zips/'   
}
]))

http.createServer(app.callback()).listen(3000);