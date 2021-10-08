const newController = require('./new');
const sitesController = require('./sites');
const courseController = require('./course');
const meController = require('./me');

function route(app) {
    app.use('/new', newController);
    app.use('/me', meController);
    app.use('/course', courseController);
    app.use('/', sitesController);
}
module.exports = route;
