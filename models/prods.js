const mongoose = require('mongoose');

let prodsSchema = new mongoose.Schema({
    name: String,
    info: String,
    category: String,
    img_url: String,
    price: Number,
    date: { type: Date, default: new Date() }
})

let Product = mongoose.model("prods", prodsSchema);

module.exports = Product;