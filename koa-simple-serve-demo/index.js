var path = require("path")
var koa = require("koa"),
    serve = require("koa-simple-serve"),
    app = new koa();

// files loaded from ./assets will be cached
app.use(serve("/assets", path.join(__dirname, "assets")));
// files loaded from ../web will not be cached
app.use(serve("/web", path.join(__dirname, "web"), { cache: false }));
app.listen(8000);