'use strict';

const fs = require('node:fs');
const path = require('node:path');

const setupRouters = (app) => {
    const routersPath = path.join(process.cwd(), "src/api/routers");

    fs.readdirSync(routersPath).forEach((module) => {
        if (module.endsWith('.js') && module !== 'routers.js') {
            const routerModule = require(path.join(routersPath, module));
            const router = routerModule.router;
            app.use(router);
        }
    });
}

module.exports = { setupRouters };