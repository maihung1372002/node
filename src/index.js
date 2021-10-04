const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
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

app.engine(
    '.hbs',
    exphbs({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resources','views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
