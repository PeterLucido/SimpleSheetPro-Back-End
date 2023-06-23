import mongoose from 'mongoose'

const Schema = mongoose.Schema

const DiverSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, lowercase: true },
  grade: { type: String, enum: ['Freshman', 'Sophomore', 'Junior', 'Senior'], required: true }, 
  school: { type: Schema.Types.ObjectId, ref: 'School' },
  coaches: [{ type: Schema.Types.ObjectId, ref: 'Coach' }],
  managers: [{ type: Schema.Types.ObjectId, ref: 'Manager' }],
  diveSheets: [{ type: Schema.Types.ObjectId, ref: 'DiveSheet' }],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true,
})

export default mongoose.model('Diver', DiverSchema)
