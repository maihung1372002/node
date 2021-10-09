const Course = require('../models/Course');
const { mutipleMongooseToObj } = require('../../util/mongoose');

class MeControllers {
    show(req, res, next) {
        Promise.all([Course.find({}), Course.countDeleted()])
            .then(([courses, countDeleted]) => {
                res.render('me/courses', {
                    countDeleted,
                    courses: mutipleMongooseToObj(courses),
                });
            })
            .catch(next);
    }
    trash(req, res, next) {
        Promise.all([Course.findDeleted({})])
            .then(([courses]) => {
                res.render('me/trashCourses', {
                    courses: mutipleMongooseToObj(courses),
                });
            })
            .catch(next);
    }
}
module.exports = new MeControllers();
