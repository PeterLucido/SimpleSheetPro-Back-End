import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CoachSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, lowercase: true },
  schools: [{ type: Schema.Types.ObjectId, ref: 'School' }],
  divers: [{ type: Schema.Types.ObjectId, ref: 'Diver' }],
  teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
  manager: { type: Schema.Types.ObjectId, ref: 'Manager' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true,
});

export default mongoose.model('Coach', CoachSchema)
