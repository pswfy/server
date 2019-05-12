const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onError = require('koa-onerror');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const coRs = require('koa2-cors');
const index = require('./routes/index');
const users = require('./routes/users');
const mongoose = require('mongoose');
const mongooseURI = require('./config/mongooseURI');

onError(app)
mongoose.connect(mongooseURI.mongooseURI,{useNewUrlParser:true,authSource:'admin'}).then(() => {
	console.log('mongodb success...')
}).catch(e => {
	console.log(`mongodb error...${e}`)
});
app.use(bodyParser({
  enableTypes:['json', 'form', 'text']
}));
app.use(coRs());
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}));

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;
