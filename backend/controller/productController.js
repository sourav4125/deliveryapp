const productModel=require("../models/productModel")



let uploadProduct =  async (req, res) => {
    console.log(req.body);
    const data = await productModel(req.body);
    const datasave = await data.save();
    console.log(datasave);
    res.send({ message: "Upload successfully" });
  };

  
let product=async (req, res) => {
    const data = await productModel.find()
    res.send(JSON.stringify(data));
  }


  module.exports = {uploadProduct,product}
