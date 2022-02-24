const config = require('./config');
const mongoose = require('mongoose');

const db = function(){
	// return mongoose.connect(config.db.url,  { useNewUrlParser: true });
	return mongoose.connect('mongodb+srv://produc_test:prodTest%40123@cluster0.txdhr.mongodb.net/firefunc?retryWrites=true&w=majority',  { useNewUrlParser: true });
}
module.exports = db;