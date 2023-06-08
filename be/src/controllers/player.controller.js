const Router = require('koa-router');

const router = new Router({
    prefix: '/api/v1/player',
});

router.get('/', async ctx => {
    ctx.body = 'hello player';
});


module.exports = router;