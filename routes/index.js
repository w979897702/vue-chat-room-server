var router = require('koa-router')();
var mongoose = require('mongoose');
router.get('/', function* (next) {
	yield this.render('index', {
		title: 'Hello World Koa!',
	});
});

router.get('/foo', function* (next) {
	yield this.render('index', {
		title: 'Hello World foo!',
	});
});

module.exports = router;
