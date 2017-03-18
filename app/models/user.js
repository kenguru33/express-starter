const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    oid: {type: String, unique:true, required: true},
    firstName: {type: String, required:false},
    lastName: {type: String, required:false},
    email: {type: String, unique:true},
    active: {type: Boolean, required:true},
    updated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('user',userSchema);

module.exports.findUserByOID = function (oid) {

    return this.findOne({oid:oid});
};