const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true, trim: true, unique: true, lowercase: true },
    last_name: { type: String, required: true, trim: true, unique: true, lowercase: true },
    Date_of_birth: { type: Date },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
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
