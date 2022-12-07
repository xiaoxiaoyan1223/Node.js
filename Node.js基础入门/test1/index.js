const http = require('http') //nodejs自带的模块
// const _=require('lodash') //需要通过npm安装的模块
// const {sum,test}=require('./utils') //自己手写的模块
const server = http.createServer((req,res)=>{
    const url = req.url
    const path=url.split('?')[0]
    res.end(path+'-123')
})

server.listen(3000)