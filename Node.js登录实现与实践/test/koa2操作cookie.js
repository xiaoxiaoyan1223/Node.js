// Koa2 操作 cookie

const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  // 设置 cookie
  ctx.cookies.set('a', '100')
  // 获取 cookie
  console.log('cookie is ', ctx.cookies.get('a'))
  // 结构化 koa2 已经做好了
  ctx.body = 'cookie test by Koa2'
  //假如说用户登陆成功，服务端设置cookie（userId，不能泄露用户信息）
  ctx.cookies.set('userId','123')
  //其他接口获取cookie
  const userId=ctx.cookies.get('userId')
  const userInfo=SESSION_DATA[userId]
  userInfo.user//用户名
  //cookie存储用户标识，用户信息则存储到session中
})

app.listen(3000) 