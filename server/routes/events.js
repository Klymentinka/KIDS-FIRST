const Event = require("../models/eventModel.js");
const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const is_parent = require("../middleware/parentAuthorize");
router.post(
  "/event/add",

  expressAsyncHandler(async (req, res) => {
    //check the db to see if you user already exists
    //if the user doesn't exist, create it and store it in the the db

    const event = new Event({
      title: req.body.title,
      start: req.body.start,
      end: req.body.end,
      description: req.body.description,
      createBy: req.body.createby,
    });
    const createdEvent = await event.save();
    res.send({
      _id: createdEvent._id,
      title: createdEvent.title,
      start: createdEvent.start,
      end: createdEvent.end,
      description: createdEvent.description,
      createBy: createdEvent.createBy,
    });
  })
);
