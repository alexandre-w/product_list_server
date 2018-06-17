const mongoose = require('mongoose');
const keys = require('../../config/keys');
mongoose.connect(keys.mongodb.dbURI);

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number},
    type: {type: String},
    creationDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('product', productSchema);