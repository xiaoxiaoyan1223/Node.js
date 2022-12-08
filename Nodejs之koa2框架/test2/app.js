const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const comments = require('./routes/comments')

// error handler 错误处理器
onerror(app)

// middlewares  中间件(app.use(...))
app.use(bodyparser({ //request body转换
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger()) //日志格式的美化
app.use(require('koa-static')(__dirname + '/public'))//静态文件服务

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger  打印当前请求所花费的时间
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// 模拟登录，为了使用中间件
app.use(async(ctx)=>{
  const query=ctx.query
  if(query.user==='张三'){
    //模拟登录成功
    await next() //执行下一步中间件
  }else{
    //模拟登陆失败
    ctx.body='请登录'
  }
})

// routes //注册路由
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(comments.routes(),comments.allowedMethods())
//allowedMethods()对于404或者输出为空的情况的一种补充
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
// 中间件{列如上式：bodyparser  view  static} 每个中间件都是async函数
// 使用中间件的优点：1拆分业务模块，使代码清晰 
//                  2统一使用中间件，使得各业务代码都规范标准 
//                  3扩展性好，易添加易删除
