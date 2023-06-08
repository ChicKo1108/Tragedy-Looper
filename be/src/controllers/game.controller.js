const Router = require('koa-router');

const router = new Router({
    prefix: '/api/v1/game',
});

router.get('/', async ctx => {
    ctx.body = 'hello game';
})

module.exports = router;