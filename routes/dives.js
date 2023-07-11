// routes/dives.js

import express from 'express'
import * as divesCtrl from '../controllers/dives.js'

export const router = express.Router()

router.get('/', divesCtrl.index)
// add more route handlers as needed: router.post('/', divesCtrl.create), etc.
