const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Course = new Schema(
    {
        _id:{type: Number},
        name: { type: String, default: 'Course name', maxlength: 255 },
        decreption: { type: String, maxlength: 600 },
        img: { type: String, maxlength: 255 },
        videoId: { type: String, maxlength: 255 },
        level: { type: String, maxlength: 255 },
        slug: { type: String, unique: true, slug: 'name' },
    },
    {
        _id:false,
        timestamps: true,
    },
);

mongoose.plugin(slug);
Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
