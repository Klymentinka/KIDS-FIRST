const express = require('express');
const router = express.Router();
const expressAsyncHandler = require('express-async-handler');
const Parent = require('../models/parentModel.js');
const bcrypt = require('bcrypt');
const generateToken = require('../utils.js');





/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});






router.post("/register", async (req, res) => {
  //check the db to see if you user already exists
  //if the user doesn't exist, create it and store it in the the db
  const oldUser = await familyMember.findOne({
    email: req.body.email,
  });
  if (oldUser) {
    res.send("You are already registered");
  }
  const user = new familyMember({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    isParent: req.body.isParent,
  });
  const createdUser = await user.save();

  res.send({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    isParent: createdUser.isParent,
    token: generateToken(createdUser),
  });
});


router.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    const parent = new Parent({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdParent = await parent.save();
    res.send({
      _id: createdParent._id,
      name: createdParent.name,
      email: createdParent.email,
      isAdmin: createdParent.isAdmin,
      isSeller: user.isSeller,
      token: generateToken(createdParent),
    });
  })
);




module.exports = router;
