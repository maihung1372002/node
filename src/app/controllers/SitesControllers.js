const Course = require('../models/Course');
const {mutipleMongooseToObj} = require('../../util/mongoose');

class SitesControllers {
    home(req, res, next) {
        
        Course.find({})
            .then(courses => {
                res.render('home',{courses: mutipleMongooseToObj(courses) })
            })
            .catch(next);

        
    }
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SitesControllers();
