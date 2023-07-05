const mongoose = require('mongoose');

const Registerschema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: { type: String },
    confirmpassword: { type: String }
});

const Registermodel = mongoose.model('Register', Registerschema);

module.exports = Registermodel;


















