const Products = require("../models/productModel.js")
const createProduct =  async (req,res) => {
    const productData = req.body
    //  const pro = await Products.save({name : productData.name, price : productData.price})
    const postData = new Products({
        name : productData.name,
        price : productData.price
    })

    const createdProduct = await postData.save();
    console.log(productData);
    res.status(201).json({
        data : createdProduct,
        success :true
    })
}

const getAllProducts =  async (req,res) =>{
  const products = await Products.find({})
  if(products){
    res.status(200).json({
        products : products,
        success : true
    })
  } else{
    res.status(404).json({
        message : "products not found",
        success: false
    })  }
}

module.exports = {createProduct, getAllProducts};