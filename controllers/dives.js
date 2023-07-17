import diveData from '../data/diveData.js';

export const getDives = async (req, res) => {
  try {
    res.status(200).json(diveData);
  } catch (error) {
    console.error('Error retrieving dive data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
