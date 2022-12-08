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