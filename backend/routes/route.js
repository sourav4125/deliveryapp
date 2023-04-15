const express=require('express');
const router=express.Router();
const {signup,login}=require("../controller/userController")
const {uploadProduct,product}=require("../controller/productController")

router.post('/login',login);
router.post('/signup',signup);

router.post("/uploadProduct",uploadProduct);
router.get('/product',product);


module.exports = router