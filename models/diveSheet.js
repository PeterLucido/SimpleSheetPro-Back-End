import mongoose from 'mongoose'

const Schema = mongoose.Schema

const DiveSheetSchema = new Schema({
  title: String,
  dives: [{ type: Schema.Types.ObjectId, ref: 'Dive' }],
  diver: { type: Schema.Types.ObjectId, ref: 'Diver' },
  is11Dive: { type: Boolean, default: false },
}, {
  timestamps: true,
})

const DiveSheet = mongoose.model('DiveSheet', DiveSheetSchema)

export default DiveSheet