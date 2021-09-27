const mongoose = require('mongoose');

const coParentSchema = new mongoose.Schema(
    {
        first_name: { type: String, trim: true, unique: true, lowercase: true },
        last_name: { type: String, trim: true, unique: true, lowercase: true },
        Date_of_birth: { type: Date },
        email: { type: String, required: true, unique: true, trim: true, lowercase: true },
        password: { type: String},
        is_parent: { type: Boolean, default: false, required: true },
        is_co_parent: { type: Boolean, default: false, required: true },
        is_child: { type: Boolean, default: false, required: true },
        is_admin: { type: Boolean, default: false, required: true },
        is_family_member: { type: Boolean, default: false, required: true },
        createBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Parent', required: true },
    },
    {
        timestamps: true,
    }
);
const CoParent = mongoose.model("CoParent", coParentSchema);
module.exports = CoParent;
