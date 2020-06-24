var path = require("path")
var koa = require("koa"),
    serve = require("koa-simple-serve"),
    app = new koa();

const http = require('http');
const rewriteUrl = require('./koa-rewrite-url');
// const rewrite = require('koa-rewrite');
const rewriteResources = require('./koa-rewrite-resources');

// app.use(rewrite('/js/(.*)', '/toolbox/zips/js/$1'));
// app.use(rewrite('/fonts/(.*)', '/toolbox/zips/fonts/$1'));
app.use(rewriteUrl())

app.use(rewriteResources(3000))

// files loaded from ./assets will be cached
app.use(serve("/assets", path.join(__dirname, "assets")));
app.use(serve("/toolbox", path.join(__dirname, "toolbox")));
// files loaded from ../web will not be cached
app.use(serve("/web", path.join(__dirname, "web"), { cache: false }));

http.createServer(app.callback()).listen(3000);