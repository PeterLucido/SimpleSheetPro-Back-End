import mongoose from 'mongoose'
import schoolData from '../data/schoolData.js'

const Schema = mongoose.Schema

const TeamSchema = new Schema({
  gender: { type: String, enum: ['Boys', 'Girls'], required: true },
  divers: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
  coach: { type: Schema.Types.ObjectId, ref: 'Profile' },
  manager: { type: Schema.Types.ObjectId, ref: 'Profile' },
  pendingRequests: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
  school: {
    type: String,
    enum: schoolData,
    required: true,
  }, 
  logo: {
    type: String,
  }, 

}, {
  timestamps: true,
})


export default mongoose.model('Team', TeamSchema)
