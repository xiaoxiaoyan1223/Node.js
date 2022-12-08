//演示 async await执行顺序

//加载一张图片
async function getImg(url=''){
    await fetch(url)
}
async function fn(){
    const url='http://img.sycnd.imooc.com'
    const start=Date.now()//记录当前时间
    await getImg(url)//调动，加载图片
    const ms=Date.now()-start//时间差
}