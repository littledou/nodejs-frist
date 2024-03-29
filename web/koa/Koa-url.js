const Koa = require('koa');

const router = require('koa-router')();
const app = new Koa();

app.use(async(ctx, next)=>{
	console.log('Process %s %s...', ctx.request.method, ctx.request.url);
	await next();
});

router.get('/hello/:name', async(ctx, next)=>{
	var name = ctx.params.name;
	ctx.response.body = ('<h1> Hello, %s!</h1>' , name);
});

router.get('/', async(ctx, next)=>{
	ctx.response.body = '<h1>Index</h1>';
});

app.use(router.routes());

app.listen(3000);
console.log('app start at port 3000....');