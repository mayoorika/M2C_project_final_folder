// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    firstName: String,
    lastName: String,
    userid: String,
    username: String,
    address :String,
    country :String,
    zip:     String,
    email:  String,
    msex :String,
    fsex:String,
    desc:String
});



// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);

// var User = mongoose.model("User", nameSchema);


// // methods ======================
// // generating a hash
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
//
// // checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);};
