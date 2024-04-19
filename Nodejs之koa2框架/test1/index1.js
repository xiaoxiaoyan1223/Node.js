//演示koa2中间件的洋葱圈模型
const Koa=require('koa')
const app=new Koa()
//logger
app.use(async(ctx,next)=>{
    await next() //执行下一个中间体
    const rt=ctx.response.get('X-Response-Time') //res
    console.log(`${ctx.method}${ctx.url}-${rt}`);
})
//x-response-time
app.use(async(ctx,next)=>{
    const start=Date.now()
    await next()//执行下一个中间件
    const ms=Date.now()-start
    ctx.set('X-Response-Time',`${ms}毫秒`)//记录并设置时间差
})
//response
app.use(async(ctx,next)=>{
    ctx.body='hello world'
})
app.listen(3000)
console.log('koa2已经开始监听3000端口');
// 洋葱圈模型
// Koa的洋葱模型是以next()函数为分割点，先由外到内执行Request的逻辑，
// 然后再由内到外执行Response的逻辑，这里的request的逻辑，
// 我们可以理解为是next之前的内容，response的逻辑是next函数之后的内容，
// 也可以说每一个中间件都有两次处理时机。洋葱模型的核心原理主要是借助compose方法
