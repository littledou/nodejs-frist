
var fn_index = async(ctx, next) =>{
	ctx.response.body=`<h1>Index</h1>
		<form action="/signin" method="post">
			<p>Name:<input name="name" value="koa"></p>
			<p>Password:<input name="password" value="password"></p>
			<p><input type="submit" value="Submit"></p>
		</form>`;
};

var fn_signin= async(ctx, next) =>{
	var name = ctx.request.body.name ||'';
	var password = ctx.request.body.password ||'';
	console.log(`sign with name:${name}, password:${password}`);
	if(name==='koa'){
		ctx.response.boyd=`<h1>Welcome ,${name}</h1>`;
	}else{
		ctx.response.body = `<h1>Login failed<h1>
			<p><a href="/">Try again</a></p>`;	
	}	
};

module.exports = {
	'GET /':fn_index,
	'POST /signin':fn_signin
};