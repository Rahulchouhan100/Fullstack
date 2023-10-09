const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "please provide price"],
  },

 
}, {timestamps : true}
);

module.exports = mongoose.model("Product", productSchema)
