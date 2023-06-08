const Koa = require('koa');
const { initRouter } = require('./src/router');
const { initDB, syncEntities } = require('./src/db');
const app = new Koa();

// init Database.
initDB().then(() => {
  syncEntities();
});

// init routes.
initRouter(app);

const port = 8080;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
