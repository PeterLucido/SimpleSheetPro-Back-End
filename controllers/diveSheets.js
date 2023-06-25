import { DiveSheet } from '../models/diveSheet.js'
import { Profile } from '../models/profile.js'

async function index(req, res) {
  try {
    const profileId = req.params.profile
    const diveSheets = await DiveSheet.find({owner: profileId})
    res.status(200).json(diveSheets)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}



export {
  index,
}