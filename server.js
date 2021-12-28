const http = require('http');
const Koa = require('koa');
const cors = require('koajs-cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const ws = require('ws');

const getUnread = require('./get-unread')

const koaBody = require('koa-body');

const port = process.env.PORT || 7071;

const app = new Koa();

app.use(cors({
    origin: true
}));

app.use(koaBody({
    urlencoded: true,
}));

const Router = require('koa-router');

const router = new Router();

router.get('/messages/unread', async (ctx, next) => {
    ctx.response.body = getUnread();
})

app.use(router.routes());
app.use(router.allowedMethods());

const server = http.createServer(app.callback());
server.listen(port);

