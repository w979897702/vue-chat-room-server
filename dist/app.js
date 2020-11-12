"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require('koa')();
const logger = require('koa-logger');
const json = require('koa-json');
const views = require('koa-views');
const koaOnError = require('koa-onerror');
const index_1 = require("./routes/index");
const user_1 = require("./routes/user");
// error handler
koaOnError(app);
// global middlewares
app.use(views('views', {
    root: __dirname + '/views',
    default: 'ejs',
}));
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));
// routes definition
app.use(index_1.default.routes(), index_1.default.allowedMethods());
app.use(user_1.default.routes(), user_1.default.allowedMethods());
// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err);
});
exports.default = app;
