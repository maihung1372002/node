const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Course = new Schema({
  name: {type: String, default:'Course name', maxlength :255},
  title: {type: String, maxlength:600},
  img: {type: String, maxlength:255},
  updateAt:{type: Date, default: Date.now},
  createAt:{type: Date, default: Date.now},
});

module.exports = mongoose.model('Course', Course);