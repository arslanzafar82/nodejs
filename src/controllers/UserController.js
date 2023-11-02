

let Op = require('sequelize').Op;
let Sequelize = require('sequelize');
const User = require('../db').User;
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res) => {

  try {
    let user = await User.create({
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      email:req.body.email,
      password:req.body.password
    });
    console.log(user);
    var token = jwt.sign({ user: user }, 'shhhhh');
    data = {
      user_token:token
    }
    return res.send({'data':data,'messag':"User created successfully",'success':true})
  } catch (error) {
    return res.send({'messag':error.errors[0].message,'success':false})
  }
   
}

module.exports.login = async(req,res) => {
	let user = await User.findOne({ where: { email: req.body.email } });
  if (!user) {
    return res.send("User not found");
	}
  if(!bcrypt.compareSync(req.body.password, user.password) )
  {
    return res.send("Incorrect Password");
  }
  var token = jwt.sign({ user: user }, 'shhhhh');
    data = {
      user_token:token,
      user:user
    }
    return res.send({'data':data,'messag':"Request processed successfully",'success':true})
}


module.exports.home = async(req, res) =>{
  console.log("Home");
  let users = await User.findAll();
  return res.send(users);
}