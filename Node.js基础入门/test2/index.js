const http=require('http')
const querystring=require('querystring')
//req Request   res Response
const server=http.createServer((req,res)=>{
    // console.log('已经收到http请求');
    const url=req.url
    const method=req.method
    const path=url.split('?')[0]// /api/list非结构化(字符串)
    const queryStr=url.split('?')[1]//a=100&=200
    //解析querystring
    // const query={}
    // queryStr.split('&').forEach(item=>{
    //     //item即a=100  b=200
    //     const key=item.split('=')[0]
    //     const val=item.split('=')[1]
    //     qurey[key]=val  {a:'100',b:'200'}结构化{数组 对象}
    // })
    //解析的简单方式
    const query=URLSearchParams.parse(queryStr||'')
    // console.log('url is:',url);
    // console.log('method is:',method);
    // res.end('hello xiaoyan')
    //定义路由：模拟获取留言板列表
    if(path=='/api/list' && method=='GET'){
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(JSON.stringify({
            errno:0,
            data:[
                {user:'张三',content:'留言1'},
                {user:'李四',content:'留言2'}
            ]
        })
            )
    }
    //定义路由：模拟创建留言
    if(path=='/api/create' && method=='POST'){
        // res.end('this is create router') 
        let bodyStr=''
        req.on('data',chunk=>{//服务端怎么去识别流，并接收和数据
            // chunk即流的每一段
            bodyStr+=chunk.toString()
        })
        req.on('end',()=>{
            console.log('Bodystr is: ',bodyStr);
            res.end('ok')
        })
        const result={
            errno:0,
            message:'创建成功'
        }
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(JSON.stringify(result))
    }
    // 没有命中路由默认404
    // res.end('404')
    res.writeHead(404,{'Content-type':'text-plain'})
    res.end('404 Not Found')
    
   
})
server.listen(3000)//可以监听http请求
console.log('http 请求已经被监听，3000端口');
//本机的地址是127.0.0.1和localhost