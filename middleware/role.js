function checkIfDiver(req, res, next) {
  // Check if user is authenticated
  if (!req.user) {
    return res.status(401).json({ err: 'Not Authorized' })
  }

  // Check if user is a diver
  if (req.user.role === 2) {
    next()
  } else {
    res.status(403).json({ err: 'Only coaches are allowed to perform this action' })
  }
}


function checkIfCoach(req, res, next) {
  // Check if user is authenticated
  if (!req.user) {
    return res.status(401).json({ err: 'Not Authorized' })
  }

  // Check if user is a coach
  if (req.user.role === 2) {
    next()
  } else {
    res.status(403).json({ err: 'Only coaches are allowed to perform this action' })
  }
}

function checkIfManager(req, res, next) {
  // Check if user is authenticated
  if (!req.user) {
    return res.status(401).json({ err: 'Not Authorized' })
  }

  // Check if user is a manager
  if (req.user.role === 3) {
    next()
  } else {
    res.status(403).json({ err: 'Only managers are allowed to perform this action' })
  }
}

function checkIfAdmin(req, res, next) {
  // Check if user is authenticated
  if (!req.user) {
    return res.status(401).json({ err: 'Not Authorized' })
  }

  // Check if user is an admin
  if (req.user.role === 4) {
    next()
  } else {
    res.status(403).json({ err: 'Only admins are allowed to perform this action' })
  }
}

export { 
  checkIfCoach, 
  checkIfManager, 
  checkIfAdmin,
  checkIfDiver
}
