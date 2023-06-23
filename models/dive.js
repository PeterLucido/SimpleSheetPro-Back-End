import mongoose from 'mongoose'

const Schema = mongoose.Schema

const DiveSchema = new Schema({
  diveNumber: String,
  dive: String,
  position: { type: String, enum: ['A', 'B', 'C', 'D'] },
  dd: Number,
}, {
  timestamps: true,
});

const Dive = mongoose.model('Dive', DiveSchema)

export default Dive