const express = require('express')
const router = express.Router()

const {getAllProducts, createProduct} = require("../controllers/productController")
const {learningnode }= require('../controllers/learningNode')

router.route("/createproduct").post(createProduct)
router.route("/").get(getAllProducts)
// router.route("/learning").get(learningnode)
// router.route("/testing").get(getAllProductsTesting)

module.exports = router;