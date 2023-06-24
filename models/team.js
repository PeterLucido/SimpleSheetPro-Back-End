import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TeamSchema = new Schema({
  teamName: { type: String },
  gender: { type: String, enum: ['Boys', 'Girls'], required: true },
  season: { type: String, enum: ['Fall', 'Winter', 'Spring', 'Summer'], required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'Diver' }],
  coach: { type: Schema.Types.ObjectId, ref: 'Coach' },
  manager: { type: Schema.Types.ObjectId, ref: 'Manager' },
  school: { type: Schema.Types.ObjectId, ref: 'School', required: true },
}, {
  timestamps: true,
});

TeamSchema.pre('save', async function (next) {
  if (!this.isModified('school') && !this.isModified('gender')) return next()

  // Fetch the school document
  const school = await mongoose.model('School').findById(this.school)
  
  // Set the teamName based on the school's name and gender
  this.teamName = `${this.gender} - ${school.name}`

  next()
})

export default mongoose.model('Team', TeamSchema)
