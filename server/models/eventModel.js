const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true, unique: false, lowercase: true },

    start: { type: Date },
    end: { type: Date },
    description: { type: String, trim: true, unique: false, lowercase: true },
    createBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parent",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
