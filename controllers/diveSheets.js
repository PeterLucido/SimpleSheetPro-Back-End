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

async function create(req, res) {
  try {
    const profile = await Profile.findById(req.params.profile)
    req.body.owner = profile
    const diveSheet = await DiveSheet.create(req.body)
    res.status(201).json(diveSheet)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function show(req, res) {
  try {
    const diveSheet = await DiveSheet.findById(req.params.id)
    res.status(200).json(diveSheet)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function update(req, res) {
  try {
    const diveSheet = await DiveSheet.findById(req.params.id)
    Object.assign(diveSheet, req.body)
    await diveSheet.save()
    res.status(202).json(diveSheet)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function destroy(req, res) {
  try {
    const diveSheet = await DiveSheet.findById(req.params.id)
    await diveSheet.remove()
    res.status(200).json({ message: 'DiveSheet removed' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


export {
  index,
  create,
  show,
  update,
  destroy,
}