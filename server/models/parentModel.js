const crypto = require("crypto");
const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true, unique: true, lowercase: true },
    lastName: { type: String, trim: true, unique: true, lowercase: true },
    dateOfBirth: { type: Date },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    is_parent: { type: Boolean, default: false, required: true },
    is_co_parent: { type: Boolean, default: false, required: true },
    is_child: { type: Boolean, default: false, required: true },
    is_admin: { type: Boolean, default: false, required: true },
    is_family_member: { type: Boolean, default: false, required: true },
    passwordResetToken: { type: String },
    passwordResetExpires: { type: Date },
  },
  {
    timestamps: true,
  }
);
parentSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};
const Parent = mongoose.model("Parent", parentSchema);
module.exports = Parent;
