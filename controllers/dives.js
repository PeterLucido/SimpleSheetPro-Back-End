// controllers/dives.js

import diveData from '../data/diveData.js';

export const index = async (req, res) => {
  try {
    res.status(200).json(diveData);
  } catch {
    console.log(err)
    res.status(400).json({ err: 'bad request' })
  }
}
