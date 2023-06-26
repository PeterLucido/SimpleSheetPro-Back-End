import mongoose from 'mongoose'
import diveData from '../data/diveData.js'

const Schema = mongoose.Schema

const DiveSheetSchema = new Schema({
  title: String,
  dives: {
    type: [{}],
    enum: diveData,
  },
  is11Dive: { 
    type: Boolean, 
    default: false 
  },
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
})

const DiveSheet = mongoose.model('DiveSheet', DiveSheetSchema)

export default DiveSheet