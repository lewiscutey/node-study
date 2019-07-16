const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')

// 静态文件目录
app.use(express.static(path.join(__dirname, 'public')))

// 配置模板引擎
nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  express: app
})
app.set('view engine', 'html')
// 配置bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// 路由
routes(app)

const server = app.listen(3001, function () {
  console.log('app listening at http:localhost:3000')
})