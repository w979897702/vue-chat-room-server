"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserList = void 0;
var mongoose = require('mongoose');
const config_1 = require("./config");
//链接数据库
mongoose.connect(config_1.default.dbs);
//创建用户集合
const userListSchema = mongoose.Schema({
    name: String,
    password: String,
});
console.log('连接成功');
exports.UserList = mongoose.model('UserList', userListSchema);
