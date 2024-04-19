// 存储在浏览器的一段字符串，最大 5kb
// 每个域都可有一个 cookie, 跨域不共享
// 格式如： k1=v1; k2=v2; k3=v3; (可结构化)
// 每次 http 请求，cookie 都会随着传递到服务端
// 服务端操作 cookie
const http = require('http')
const server = http.createServer((req, res) => {
  // 设置 cookie
  res.setHeader('Set-Cookie', 'b=200')
  // 获取 cookie
  const cookieStr = req.headers.cookie
  console.log('cookie is ', cookieStr)
  // 结构化 cookie
  // cookieStr: 'a=100; b=200'  --> { a: '100', b: '200' }
  const cookieObj = {}
  cookieStr.split(';').forEach(cookieItemStr => {
    const arr = cookieItemStr.trim().split('=');
    const key = arr[0]  // 'a'
    const val = arr[1]  // '100'
    cookieObj[key] = val
  })
  console.log('cookieObj is', cookieObj)

  res.end('cookie test')
})
server.listen(3000)
console.log('server listening on 3000 port')