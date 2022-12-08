// 框架的优点：1封装原生代码的API 2规范流程和格式
const router = require('koa-router')()

router.prefix('/api') //前缀 
//定义路由:模拟获取留言列表
router.get('/list',async(ctx)=>{
    //获取querystring
    const query=ctx.query //req功能
    console.log('query',query); 
    //返回字符串格式
    // ctx.body('ctx list') //res功能
    //返回JSON格式
    ctx.body={
        errno:0,
        data:[
            {content:"留言1",user:"张三"},
            {content:"留言2",user:"李四"},
            {content:"留言3",user:"张三"}
        ]
    }
})

// 定义路由:模拟创建留言列表
router.post('/create',async (ctx)=>{
    const body=cxt.request.body //request body
    console.log('body',body);
    ctx.body='api create'
})
module.expoerts=router //输出
