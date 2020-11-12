var mongoose = require('mongoose');
import dbConfig from './config';
//链接数据库
mongoose.connect(dbConfig.dbs);
//创建用户集合
const userListSchema = mongoose.Schema({
	name: String,
	password: String,
});
console.log('连接成功');
export const UserList = mongoose.model('UserList', userListSchema);
