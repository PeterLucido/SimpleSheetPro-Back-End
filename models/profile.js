import mongoose from 'mongoose'
import schoolNames from '../data/schoolDatajs'
import { DiveSheet } from './diveSheet.js'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  firstName: String,
  lastName: String,
  gender: {
    type: String,
    enum: ['Male', 'Female']
  },
  grade: { 
    type: String, 
    enum: ['Freshman', 'Sophomore', 'Junior', 'Senior'],
  },
  school: {
    type: String,
    enum: schoolNames,
  },
  photo: String, 
  role: {
    type: Number,
    enum: [1, 2, 3, 4],
    default: 1,
  },
  diveSheets: [{ type: Schema.Types.ObjectId, ref: 'DiveSheet' }],
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }

