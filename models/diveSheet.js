import mongoose from 'mongoose';
import diveData from '../data/diveData.js';

const Schema = mongoose.Schema;

const DiveSchema = new Schema({
  _id: { type: String, required: true },
  diveNumber: { type: String, required: true },
  dive: { type: String, required: true },
  position: { type: String, required: true },
  dd: { type: Number, required: true },
});

const DiveSheetSchema = new Schema({
  title: String,
  dives: {
    type: [DiveSchema],
  },
  is11Dive: { 
    type: Boolean, 
    default: false,
  },
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
});

export const DiveSheet = mongoose.model('DiveSheet', DiveSheetSchema);
export default DiveSheet;
