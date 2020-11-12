const app = require('koa')();
const logger = require('koa-logger');
const json = require('koa-json');
const views = require('koa-views');
const koaOnError = require('koa-onerror');
import index from './routes/index';
import user from './routes/user';

// error handler
koaOnError(app);

// global middlewares
app.use(
	views('views', {
		root: __dirname + '/views',
		default: 'ejs',
	})
);
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(user.routes(), user.allowedMethods());

// error-handling
app.on('error', (err: any, ctx: any) => {
	console.error('server error', err);
});

export default app;
