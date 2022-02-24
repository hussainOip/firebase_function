const mongoose = require('mongoose');
const products = new mongoose.Schema({
	body : {
		type : String,
		required : false
	},
    title : {
		type : String,
		required : false
	},
    id : {
		type : Number,
		required : false
	},
    userId : {
		type : Number,
		required : false
	}
}, {
	timestamps: true
});
module.exports = mongoose.model("products", products);