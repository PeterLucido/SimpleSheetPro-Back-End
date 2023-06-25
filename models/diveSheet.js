import mongoose from 'mongoose'

const Schema = mongoose.Schema

const DiveSheetSchema = new Schema({
  title: String,
  dives: [{ type: Schema.Types.ObjectId, ref: 'Dive' }],
  diver: { type: Schema.Types.ObjectId, ref: 'Diver' },
  is11Dive: { type: Boolean, default: false },
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
})

const DiveSheet = mongoose.model('DiveSheet', DiveSheetSchema)

export default DiveSheet