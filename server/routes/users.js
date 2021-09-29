const express = require('express');
const router = express.Router();
const expressAsyncHandler = require('express-async-handler');
const Parent = require('../models/parentModel.js');
const CoParent = require('../models/coParentModel.js');
const Child = require('../models/childModel.js');
const Admin = require('../models/adminModel.js');
const bcrypt = require('bcrypt');
const generateToken = require('../utils.js');
const authorize = require("../middleware/authorize")
const is_parent = require("../middleware/parentAuthorize")




/* GET users listing. */
// router.get(
//   '/seed',
//   expressAsyncHandler(async (req, res) => {
//     //await User.remove({});
//     const createdUsers = await Parent.insertMany(data.users);
//     res.send({ createdUsers });
//   })
// );


router.post(
  '/parent/register',
  expressAsyncHandler(async (req, res) => {
    const { email } = req.body;

    //check the db to see if you user already exists
    //if the user doesn't exist, create it and store it in the the db
    const oldParent = await Parent.findOne({ email });
    if (oldParent) {
      res.status(401).send({ message: 'User already exists' });
    }
    const parent = new Parent({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      is_parent: req.body.is_parent,
    });
    const createdParent = await parent.save();
    res.send({
      _id: createdParent._id,
      firstName: createdParent.firstName,
      lastName: createdParent.lastName,
      dateOfBirth: createdParent.dateOfBirth,
      email: createdParent.email,
      is_parent: createdParent.is_parent,
      token: generateToken(createdParent),
    });


  })
);

router.post(
  '/coParent/register',authorize,is_parent,
  expressAsyncHandler(async (req, res) => {
    const { email } = req.body;

    //check the db to see if you user already exists
    //if the user doesn't exist, create it and store it in the the db
    const oldCoParent = await CoParent.findOne({ email });
    if (oldCoParent) {
      res.status(401).send({ message: 'coParent already exists' });
    }
    const coParent = new CoParent({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      is_co_parent: req.body.is_co_parent,
      createBy: req.body.createBy,
    });
    const createdCoParent = await coParent.save();
    res.send({
      _id: createdCoParent._id,
      firstName: createdCoParent.firstName,
      lastName: createdCoParent.lastName,
      dateOfBirth: createdCoParent.dateOfBirth,
      email: createdCoParent.email,
      is_co_parent: createdCoParent.is_co_parent,
      createBy: createdCoParent.createBy,
      token: generateToken(createdCoParent),
    });

  })
);

router.post(
  '/child/register',authorize,is_parent,
  expressAsyncHandler(async (req, res) => {
    const { email } = req.body;

    //check the db to see if you user already exists
    //if the user doesn't exist, create it and store it in the the db

    const oldChild = await Child.findOne({ email });
    if (oldChild) {
      res.status(401).send({ message: 'Child already exists' });
    }
    const child = new Child({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      is_child: req.body.is_child,
      createBy: req.body.createBy,

    });
    const createdChild = await child.save();
    res.send({
      _id: createdChild._id,
      firstName: createdChild.firstName,
      lastName: createdChild.lastName,
      dateOfBirth: createdChild.dateOfBirth,
      email: createdChild.email,
      is_child: createdChild.is_child,
      createBy: createdChild.createBy,
      token: generateToken(createdChild),
    });
  })
);



router.post(
  '/admin/register',
  expressAsyncHandler(async (req, res) => {
    const { email } = req.body;

    //check the db to see if you user already exists
    //if the user doesn't exist, create it and store it in the the db

    const oldAdmin = await Admin.findOne({ email });
    if (oldAdmin) {
      res.status(401).send({ message: 'Admin already exists' });
    }
    const admin = new Admin({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      is_admin: req.body.is_admin,

    });
    const createdAdmin = await admin.save();
    res.send({
      _id: createdAdmin._id,
      firstName: createdAdmin.firstName,
      lastName: createdAdmin.lastName,
      dateOfBirth: createdAdmin.dateOfBirth,
      email: createdAdmin.email,
      is_admin: createdAdmin.is_admin,
      token: generateToken(createdAdmin),
    });
  })
);


router.post(
  '/admin/signin',
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (email === '' && password === '') {
      res.status(401).send({ message: 'Please enter Email and Password' });
    } else {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        res.status(401).send({ message: 'Admin with this Email does not exist.' });
      } else {
        if (admin) {
          if (password === '') {
            res.status(401).send({ message: 'Please Enter Password.' });
          } else {
            if (await bcrypt.compare(
              req.body.password,
              admin.password)) {
              res.send({
                _id: admin._id,
                email: admin.email,
                is_admin: admin.is_admin,
                token: generateToken(admin),
              });
            } else {
              res.status(401).send({ message: 'Password is Incorrect.' });
            }
          }
        } else {
          res.status(401).send({ message: 'Invalid Email or Password' });
        }
      }
    }

  }));

router.post(
  '/parent/signin',
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (email === '' && password === '') {
      res.status(401).send({ message: 'Please enter Email and Password' });
    } else {
      const parent = await Parent.findOne({ email });
      if (!parent) {
        res.status(401).send({ message: 'Parent with this Email does not exist.' });
      } else {
        if (parent) {
          if (password === '') {
            res.status(401).send({ message: 'Please Enter Password.' });
          } else {
            if (await bcrypt.compare(
              req.body.password,
              parent.password)) {
              res.send({
                _id: parent._id,
                email: parent.email,
                is_parent: parent.is_parent,
                token: generateToken(parent),
              });
            } else {
              res.status(401).send({ message: 'Password is Incorrect.' });
            }
          }
        } else {
          res.status(401).send({ message: 'Invalid Email or Password' });
        }
      }
    }

  }));

router.post(
  '/coParent/signin',
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (email === '' && password === '') {
      res.status(401).send({ message: 'Please enter Email and Password' });
    } else {
      const coParent = await CoParent.findOne({ email });
      if (!coParent) {
        res.status(401).send({ message: 'Co-Parent with this Email does not exist.' });
      } else {
        if (coParent) {
          if (password === '') {
            res.status(401).send({ message: 'Please Enter Password.' });
          } else {
            if (await bcrypt.compare(
              req.body.password,
              coParent.password)) {
              res.json({
                _id: coParent._id,
                createBy:coParent.createBy,
                email: coParent.email,
                is_co_parent: coParent.is_co_parent,
                token: generateToken(coParent),
              });
            } else {
              res.status(401).send({ message: 'Password is Incorrect.' });
            }
          }
        } else {
          res.status(401).send({ message: 'Invalid Email or Password' });
        }
      }
    }
  }));

module.exports = router;

