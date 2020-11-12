"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = require('koa-router')();
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
exports.default = router;
