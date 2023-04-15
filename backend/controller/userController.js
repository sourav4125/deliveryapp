const userModel = require("../models/userModel");

let signup = async (req, res) => {
  const email  = req.body;

  userModel.findOne({ email: email }, (err, result) => {
    console.log(result);
    console.log(err);
    if (result) {
      res.send({ message: "Email id is already register", alert: false });
    } else {
      const data = userModel(req.body);
      const save = data.save();
      res.send({ message: "Successfully sign up", alert: true });
    }
  });
};



//api login
let login = async (req, res) => {
  const  {email,password}  = req.body;
  userModel.findOne({ email: email }, (err, result) => {
    console.log(result)
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log(dataSend);
      res.send({
        message: "Login is successfully",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  });
};

//   module.export={signup,login}
//   app.post("/login", (req, res) => {
//     console.log(req.body);

//   });
module.exports={login,signup}