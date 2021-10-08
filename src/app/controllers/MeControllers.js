const Course = require('../models/Course');
const { mutipleMongooseToObj } = require('../../util/mongoose');

class MeControllers {
    show(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/courses', {
                    courses: mutipleMongooseToObj(courses),
                });
            })
            .catch(next);
    }
    trash(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                res.render('me/trashCourses', {
                    courses: mutipleMongooseToObj(courses),
                });
            })
            .catch(next);
    }
}
module.exports = new MeControllers();
