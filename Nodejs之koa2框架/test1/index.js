const Koa=require('koa')  //require是commonjs模块化规范  包含三个层级
const app=new Koa()
// ctx=>context  上下文
app.use(async()=>{
    ctx.body='hello world'
})
app.listen(3000) //web server监听3000端口

// 通过node index.js启动服务器
