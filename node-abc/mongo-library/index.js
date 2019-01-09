const mongoose = require("mongoose")
// 使用原生promise，mongoose自带promise不再支持了
mongoose.Promise = global.Promise

const db=mongoose.connect('mongodb://localhost/test')

db.connection.on("error", function (error) {  
  console.log("数据库连接失败：" + error)
})

db.connection.on("open", function () {  
  console.log("数据库连接成功")
})