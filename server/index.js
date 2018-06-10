const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();
const app = new Koa();
const rp = require('request-promise-native');
const cors = require('@koa/cors');

const okexBaseUrl = 
    // 'https://www.okex.com/api/v1/'
    'https://chosan.cn:3000/api/'

router.get('/okex/:path', async (ctx, next ) => {
    let qs = ctx.query;
    let rs = await rp.get(`${okexBaseUrl}${ctx.params.path}`, { qs });
    ctx.body = rs;
})

router.post('/okex/:path', async (ctx, next) => {
    let form = ctx.request.body;
    let rs = await rp.post(`${okexBaseUrl}${ctx.params.path}`, { form });
    ctx.body = rs;
})

app
    .use(cors())
    .use(bodyParser())
    .use(router.routes())

app.listen(3000);