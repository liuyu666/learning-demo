const Koa = require('koa');
const fs = require('fs');
const route = require('koa-route');
const koaBody = require('koa-body');

const path = require('path');
const serve = require('koa-static');
const main = serve(path.join(__dirname));

const app = new Koa();

// static
app.use(main);

// cors跨域
app.use((ctx, next)=> {
  console.log('跨域');
  // ctx.set({
  //   'Access-Control-Allow-Origin': '*', 
  //   'Access-Content-Allow-Methods': 'GET,PUT,POST',
  //   'Access-Content-Expose-Headers': 'Content-Type',
  //   // 'Access-Control-Allow-Credentials': true // 设置此字段 Access-Control-Allow-Origin的值不能为 *
  // });
  next()
});

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// route
const home = (ctx)=>{
  const n = Number(ctx.cookies.get('view')||0) + 1
  ctx.cookies.set('view', n)
  ctx.body = '首页' + n
}
const about = async (ctx)=>{
  ctx.response.type = 'html'
  ctx.body = fs.createReadStream('./index.html', 'utf8');
}
app.use(route.get('/home', home))
app.use(route.get('/about', about))
app.use(route.get('/jsonp', (ctx)=>{
  console.log(ctx.query.callback);
  let callback = ctx.query.callback
  ctx.body = callback+"({data: '数据'})"
}))


// body
const name = async (ctx)=>{
  const body = ctx.request.body;
  if(!body.name) ctx.throw(400, 'name is required')
  ctx.body = {name: body.name}
}
app.use(koaBody())
app.use(name)


app.listen(3000, ()=>{
  console.log("http://localhost:3000");
});