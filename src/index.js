const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const route = require('./routes/index');
const db = require('./config/db');

db.connect();

// app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'));
app.engine(
    '.hbs',
    exphbs({
        extname: '.hbs',
        helpers: {
            sum: function (a, b) {
                return a + b;
            },
        },
    }),
);
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
