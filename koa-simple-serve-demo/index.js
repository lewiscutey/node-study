var path = require("path")
var koa = require("koa"),
    serve = require("koa-simple-serve"),
    app = new koa();

const http = require('http');
const rewrite = require('koa-rewrite');
const loggerAsync = require('./koa-modify-resources');

app.use(rewrite('/js/(.*)', '/zips/js/$1'));
app.use(rewrite('/fonts/(.*)', '/zips/fonts/$1'));

// files loaded from ./assets will be cached
app.use(serve("/assets", path.join(__dirname, "assets")));
app.use(serve("/zips", path.join(__dirname, "zips")));
// files loaded from ../web will not be cached
app.use(serve("/web", path.join(__dirname, "web"), { cache: false }));

app.use(loggerAsync())

http.createServer(app.callback()).listen(3000);