function rewriteResources(ctx, port) {
  const url = ctx.req.url
  if(url.charAt(url.length - 1) === "/") {
    const baseLabel = `<base href="http://localhost:${port}${url}" />`
    const html = ctx.body.toString('UTF-8')
    const newHtml = html.replace(/<head>/i, $0 => `${$0}\n ${baseLabel}`)
    ctx.body = Buffer.from(newHtml)
  }
}

module.exports = function (port) {
  return async function (ctx, next) {
    await next()
    rewriteResources(ctx, port);
  }
}
