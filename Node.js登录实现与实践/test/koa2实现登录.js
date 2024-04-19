// ├── Koa2
// │   ├── config
// │   │   ├── DBconfig.js// 数据库配置文件
// |   ├── controller
// |   |   ├──userController.js
// |   ├── lib
// |   |   ├──mysql.js //连接Mysql
// |   ├── router
// |   |   ├──router.js // 总路由
// |   |   ├──userRoute.js
// |   ├── service
// |   |   ├──user.js 
// |   ├── app.js //入口文件
// └── ── package.json
// 文件结构尽量模仿了MVC架构开发。核心代码就是Koa2目录下的五个文件

// app.js 是整个koa2 的入口文件，注册了router和各种中间件。
// config是数据库的配置文件，里面DBconfig.js来统一管理数据库的配置。
// controller 文件夹MVC架构下的controller层router 文件夹来处理不同的路径请求，导入到对应的controller
// service 文件夹是MVC的业务层，处理来自controller的数据，查询后数据库处理后返回处理后的数据
// package.json 配置文件
//通过npm安装依赖包，例如
// npm install koa -S
