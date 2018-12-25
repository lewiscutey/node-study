#### exports和module.exports 区别

* exports仅仅是module.exports的一个地址引用。nodejs只会导出module.exports的指向，如果exports指向变了，那就仅仅是exports不在指向module.exports，于是不会再被导出

* module.exports才是真正的接口，exports只不过是它的一个辅助工具。最终返回给调用的是module.exports而不是exports。
* 所有的exports收集到的属性和方法，都赋值给了module.exports。当然，这有个前提，就是module.exports本身不具备任何属性和方法。如果，module.exports已经具备一些属性和方法，那么exports收集来的信息将被忽略
Node开发者建议导出对象用module.exports,导出多个方法和变量用exports

#### npm包
一个符合CommonJS规范的包应该是如下这种结构：

* 一个package.json文件应该存在于包顶级目录下
* 二进制文件应该包含在bin目录下。
* JavaScript代码应该包含在lib目录下。
* 文档应该在doc目录下。
* 单元测试应该在test目录下

#### package.json
* name：包名，需要在NPM上是唯一的，小写字母和数字组成可包含_ - .但不能有空格
* description：包简介。通常会显示在一些列表中
* version：版本号。一个语义化的版本号（http://semver.org/ ），通常为x.y.z。该版本号十分重要，常常用于一些版本控制的场合
* keywords：关键字数组。用于NPM中的分类搜索
* maintainers：包维护者的数组。数组元素是一个包含name、email、web三个属性的JSON对象
* contributors：包贡献者的数组。第一个就是包的作者本人。在开源社区，如果提交的patch被merge进master分支的话，就应当加上这个贡献patch的人。格式包含name和email
* bugs：一个可以提交bug的URL地址。可以是邮件地址（mailto:mailxx@domain），也可以是网页地址
* licenses：包所使用的许可证
* repositories：托管源代码的地址数组
* dependencies：当前包需要的依赖。这个属性十分重要，NPM会通过这个属性，帮你自动加载依赖的包
* 除了前面提到的几个必选字段外，还有一些额外的字段，如bin、scripts、engines、devDependencies、author

##npm的使用
行下面的命令，查看各种信息
```js
# 查看 npm 命令列表
$ npm help

# 查看各个命令的简单用法
$ npm -l

# 查看 npm 的版本
$ npm -v

# 查看 npm 的配置
$ npm config list -l
```