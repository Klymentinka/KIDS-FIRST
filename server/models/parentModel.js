const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true, unique: true, lowercase: true },
    lastName: { type: String, trim: true, unique: false, lowercase: true },
    dateOfBirth: { type: Date },
    email: { type: String, required: true, unique: false, trim: true, lowercase: true },
    password: { type: String, required: true },
    is_parent: { type: Boolean, default: false, required: true },
    is_co_parent: { type: Boolean, default: false, required: true },
    is_child: { type: Boolean, default: false, required: true },
    is_admin: { type: Boolean, default: false, required: true },
    is_family_member: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);
const Parent = mongoose.model("Parent", parentSchema);
module.exports = Parent;
