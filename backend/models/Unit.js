const mongoose = require('mongoose');

const UnitSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    levelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Level', required: true }, 
    unitNumber: { type: Number, required: true }, 
}, { timestamps: true });

module.exports = mongoose.model('Unit', UnitSchema);
