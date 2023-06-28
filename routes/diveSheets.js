import { Router } from 'express';
import * as diveSheetsCtrl from '../controllers/diveSheetsController.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import { checkIfAdmin, checkIfCoach, checkIfDiver, checkIfManager } from '../middleware/role.js'

const router = Router()

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, checkIfCoach, checkIfDiver, checkIfManager, diveSheetsCtrl.index)
