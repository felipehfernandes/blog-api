const express = require('express');
const router = require('./routes');
const errMiddleware = require('./middlewares/error.middleware');

// ...

const app = express();

app.use(express.json());

// ...

app.use(router);
app.use(errMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
