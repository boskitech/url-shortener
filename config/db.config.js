const mongoose = require('mongoose')

const URL = 'mongodb://127.0.0.1:27017/urlshortener';

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err));

const con = mongoose.connection;

module.exports = con