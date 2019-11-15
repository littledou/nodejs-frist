const Koa = require("koa");
const router = require('koa-router')();
const bodyParser=require('koa-bodyparser');

const koabody=require('koa-body')({
	multipart: true,
});

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`End Time: ${ms}ms`); // 打印耗费时间
});


router.get('/hello/:name', async(ctx, next)=>{
	var name = ctx.params.name;
	ctx.response.body=`<h1> hello , ${name}! `;
});

router.get('/', async(ctx, next)=>{
	ctx.response.body=`<h1>Index</h1>
		<form action="/signin" method="post">
			<p>Name: <input name="name" value="koa"></p>
			<p>Password: <input name="password" value="password"></p>
			<p><input type="submit" value="Submit"></p>
		</from>
	`;
});

router.post('/signin', async(ctx)=>{
	// var name = ctx.request.body.name  || '';
	// var password = ctx.request.body.password ||'';
	console.log(ctx.request.body);

	ctx.response.code = 200;
	ctx.response.body = `sss`;

});

app.use(koabody);

app.use(router.routes());

app.listen(3000);
console.log('app start at port 3000...');