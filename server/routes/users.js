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





module.exports = router;
