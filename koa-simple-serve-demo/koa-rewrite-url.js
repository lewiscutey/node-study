const path = require("path")

function rewriteUrl(ctx) {
  const url = ctx.req.url
  const referer = ctx.req.headers.referer
  if(referer && referer.indexOf('/toolbox') >= 0) {
    console.log(`11`, ctx.url)
    const pathName = referer.substring(referer.indexOf('/toolbox'), referer.length)
    ctx.url = path.join(pathName, url)
    console.log(`22`, ctx.url)
  }
}

module.exports = function () {
  return async function (ctx, next) {
    rewriteUrl(ctx);
    await next()
  }
}
