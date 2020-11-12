"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = require('koa-router')();
const model_1 = require("../config/model");
router.prefix('/user');
router.post('/login', async function (next) {
    const data = this.request.body;
    const { name, password } = data;
    console.log(name, password);
    let res = await model_1.UserList.find({ name });
    if (res.length) {
        if (res[0].password === password) {
            this.body = {
                code: 200,
            };
        }
        else {
            this.body = {
                code: 0,
                err: '密码错误',
            };
        }
    }
    else {
        this.body = {
            code: 0,
            err: '账号不存在',
        };
    }
});
router.post('/register', async function (next) {
    const data = this.request.body;
    const { name, password } = data;
    console.log(name, password);
    let res = await model_1.UserList.find({ name });
    if (!res.length) {
        const user = new model_1.UserList({ name, password });
        user.save();
        this.body = {
            code: 200,
            err: 0,
        };
    }
    else {
        this.body = {
            code: 0,
            err: '用户名重复',
        };
    }
});
exports.default = router;
