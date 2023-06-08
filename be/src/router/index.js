const Router = require('koa-router');
const requireDir = require('require-directory');

module.exports = {
  initRouter: (app) => {
    const dir = `${process.cwd()}/src/controllers`;
    requireDir(module, dir, {
      visit: (obj) => {
        if (obj instanceof Router) {
          app.use(obj.routes());
        }
      },
    });
  },
};
