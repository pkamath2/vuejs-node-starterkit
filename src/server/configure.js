const bodyParser = require('body-parser')
const apiRoutes = require('./api/routes')

module.exports = app => {
    app.use(bodyParser.json());
    app.use(apiRoutes);
}