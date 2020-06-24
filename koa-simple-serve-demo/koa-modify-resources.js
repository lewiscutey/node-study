function log(ctx) {
  console.log(`111`, ctx.body)
}

module.exports = function () {
  return async function (ctx, next) {
    log(ctx);
    await next()
  }
}