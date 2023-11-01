

let Op = require('sequelize').Op;
let Sequelize = require('sequelize');
const User = require('../db').User;
const bcrypt = require('bcrypt');


module.exports.signup = async (req, res) => {
    

    await User.create({
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      email:req.body.email,
      password:req.body.password
    });


    let users = await User.findAll()
    res.send(users)
}

module.exports.login = async(req,res) => {
	let user = await User.findOne({ where: { email: req.body.email } });
  if (!user) {
    res.send("Incorrect email");
	}
  if(!bcrypt.compareSync(req.body.password, user.password) )
  {
    res.send("Incorrect Password");
  }
  res.send(user)
}