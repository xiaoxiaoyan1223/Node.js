// 请求登陆接口，成功则设置cookie,如 user = zhangsan
// 前端再请求其他接口，就会带着上述 cookie
// 服务端判断 cookie 有无 user = zhangsan ,即可验证
//---------------session-------------//
// cookie存放用户明文信息非常危险  解决方案：cookie存一个用户标识，如userId=123
