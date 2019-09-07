const Koa = require('koa');
const app = new Koa();

// app.use(async(ctx, next)=>{
// 	await next();
// 	ctx.response.type = 'text/html';
// 	ctx.response.body = '<h1> hello, koa2!</ha>';
// });
var sss = 'auiuihuh';
console.log('${sss}');

app.use(async(ctx, next)=>{
	console.log('ctx.request.method+ ctx.request.url');
	await next();
});


app.use(async(ctx, next)=>{
	const start = new Date().getTime();
	await next();
	const ms = new Date().getTime() - start;
	console.log('Time: ${{ms}} ms');
});

app.use(async(ctx, next)=>{
	await next();
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1> hello, Koa2!<h1>'
});



app.listen(3000);
console.log('app start at port 3000');