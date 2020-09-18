var mongoose = require('mongoose');
//创建用户集合
const userListSchema = mongoose.Schema({
	name: String,
	password: String,
});
console.log('连接成功');
const UserList = mongoose.model('UserList', userListSchema);
module.exports = {
	UserList,
};
