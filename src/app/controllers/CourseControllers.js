const Course = require('../models/Course');
const { mongooseToObj } = require('../../util/mongoose');

class CourseControllers {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('course/courseDetail', {
                    course: mongooseToObj(course),
                });
            })
            .catch(next);
    }
    create(req, res, next) {
        res.render('course/create');
    }

    // [post] course/store
    store(req, res, next) {
        req.body.img = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch((err) => {
                res.json(course);
            });
    }

    // [get] /:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('course/update', { course: mongooseToObj(course) });
            })
            .catch(next);
    }
    // [PUT] /:id
    save(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    // [PATCH] /:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [DELETE] /:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }
    // [DELETE] /:id/force
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }
}
module.exports = new CourseControllers();
