const getAllProducts =  async(req,res) => {
    res.status(200).json({
        first : "this is my first api",
        success :true
    })
}

module.exports = getAllProducts;