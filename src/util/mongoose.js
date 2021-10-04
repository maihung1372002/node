module.exports = {
    mutipleMongooseToObj: function (mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObj: function (mongoose){
        return  mongoose.toObject();
    },
}