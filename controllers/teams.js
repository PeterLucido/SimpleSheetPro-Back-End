async function getTeams(req, res) {
  try {
    const teams = await Team.find({ coach: req.user._id });
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getTeam(req, res) {
  const { id } = req.params;
  try {
    const team = await Team.findById(id);
    if (!team) return res.status(404).json({ message: `Team with id: ${id} not found` })
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createTeam(req, res) {
  const team = req.body
  team.coach = req.user._id
  const newTeam = new Team(team)
  try {
    await newTeam.save()
    res.status(201).json(newTeam)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

async function updateTeam(req, res) {
  const { id } = req.params;
  const team = req.body;
  try {
    const updatedTeam = await Team.findByIdAndUpdate(id, team, { new: true });
    res.status(200).json(updatedTeam);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
}

async function deleteTeam(req, res) {
  const { id } = req.params;
  try {
    await Team.findByIdAndDelete(id);
    res.status(200).json({ message: `Team with id: ${id} deleted` });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
}

async function addDiverToTeam(req, res) {
  const { id } = req.params; // Team ID
  const { diverId } = req.body; // Diver ID
  try {
    const team = await Team.findById(id);
    team.divers.push(diverId);
    await team.save();
    res.status(200).json(team);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
}


async function removeDiverFromTeam(req, res) {
  const { id } = req.params; // Team ID
  const { diverId } = req.body; // Diver ID
  try {
    const team = await Team.findById(id);
    const diverIndex = team.divers.indexOf(diverId);
    if (diverIndex > -1) {
      team.divers.splice(diverIndex, 1);
    }
    await team.save();
    res.status(200).json(team);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
}

async function requestToJoinTeam(req, res) {
  const { id } = req.params; // Team ID
  const { diverId } = req.body; // Diver ID
  try {
    const team = await Team.findById(id);
    team.pendingRequests.push(diverId);
    await team.save();
    res.status(200).json(team);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
}

async function approveJoinRequest(req, res) {
  const { id } = req.params; // Team ID
  const { diverId } = req.body; // Diver ID
  try {
    const team = await Team.findById(id);
    const requestIndex = team.pendingRequests.indexOf(diverId);
    if (requestIndex > -1) {
      team.pendingRequests.splice(requestIndex, 1);
      team.divers.push(diverId);
    }
    await team.save();
    res.status(200).json(team);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
}

async function rejectJoinRequest(req, res) {
  const { id } = req.params; // Team ID
  const { diverId } = req.body; // Diver ID
  try {
    const team = await Team.findById(id);
    const requestIndex = team.pendingRequests.indexOf(diverId);
    if (requestIndex > -1) {
      team.pendingRequests.splice(requestIndex, 1);
    }
    await team.save();
    res.status(200).json(team);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
}



export {
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
  addDiverToTeam,
  removeDiverFromTeam,
  requestToJoinTeam,
  approveJoinRequest,
  rejectJoinRequest,
}