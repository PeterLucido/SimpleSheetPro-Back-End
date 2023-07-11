// controllers/dives.js

import diveData from '../data/diveData.js';

export const index = (req, res) => {
  let { diveNumber, dive, position, dd } = req.query;
  let filteredDives = diveData;
  
  // Trim and lowercase query parameters if they are provided
  if (diveNumber) {
    diveNumber = diveNumber.trim();
  }
  if (dive) {
    dive = dive.trim().toLowerCase();
  }
  if (position) {
    position = position.trim().toLowerCase();
  }
  if (dd) {
    dd = dd.trim().toLowerCase();
  }

  // Filter by diveNumber, dive, position and dd, if they are provided
  if (diveNumber) {
    filteredDives = filteredDives.filter(dive => dive.diveNumber.includes(diveNumber));
  }
  if (dive) {
    filteredDives = filteredDives.filter(dive => dive.dive.toLowerCase().includes(dive));
  }
  if (position) {
    filteredDives = filteredDives.filter(dive => dive.position.toLowerCase() === position);
  }
  if (dd) {
    filteredDives = filteredDives.filter(dive => dive.dd.toLowerCase() === dd);
  }
  
  res.json(filteredDives);
};
