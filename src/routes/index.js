const newController = require('./new');
const sitesController = require('./sites');

function route(app) {
    app.use('/new', newController);
    app.use('/', sitesController);
}
module.exports = route;
