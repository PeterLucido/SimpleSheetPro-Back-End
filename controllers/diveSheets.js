import DiveSheet from '../models/diveSheet.js';
// import { Profile } from '../models/profile.js';

async function index(req, res) {
  try {
    const profileId = req.user.profile;
    const diveSheets = await DiveSheet.find({ owner: profileId });
    res.status(200).json(diveSheets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}


async function create(req, res) {
  try {
    req.body.owner = req.user.profile;
    const diveSheet = await DiveSheet.create(req.body);

    console.log(diveSheet);
    res.status(201).json(diveSheet);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}






export { index, create };