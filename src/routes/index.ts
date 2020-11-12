var router = require('koa-router')();
router.get('/', function* (next: any) {
	yield this.render('index', {
		title: 'Hello World Koa!',
	});
});

router.get('/foo', function* (next: any) {
	yield this.render('index', {
		title: 'Hello World foo!',
	});
});

export default router;
