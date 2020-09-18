var app = require('koa')(),
	logger = require('koa-logger'),
	json = require('koa-json'),
	views = require('koa-views'),
	onerror = require('koa-onerror');

var index = require('./routes/index');
var user = require('./routes/user');
var mongoose = require('mongoose');
var dbConfig = require('./config/config');
//链接数据库
mongoose.connect(dbConfig.dbs);

// error handler
onerror(app);

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

app.use(function* (next) {
	var start = new Date();
	yield next;
	var ms = new Date() - start;
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(user.routes(), user.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
	console.error('server error', err);
});

module.exports = app;
