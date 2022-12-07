const http=require('http')
const server=http.createServer((req,res)=>{
    // console.log('已经收到http请求');
    res.end('hello xiaoyan')
   
})
server.listen(3000)//可以监听http请求
console.log('http 请求已经被监听，3000端口');
//本机的地址是127.0.0.1和localhost