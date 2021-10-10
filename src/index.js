const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const route = require('./routes/index');
const db = require('./config/db');
const sortMiddleware = require('./app/middlewares/SortMiddleware');

db.connect();

// app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(sortMiddleware);

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
            sortAble: function(column, sort){
                const sortType =  column === sort.column ? sort.type : 'default';

                const icons = {
                    default:'oi oi-elevator',
                    asc:'oi oi-sort-ascending',
                    desc:'oi oi-sort-descending',
                }
                const types ={
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                }
                // type = 
                let icon = icons[sortType];
                let type = types[sortType];
                
                return `<a href="?_sort&column=${column}&type=${type}" class="${icon}"></a>`
            }
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
