import { Router } from 'express';
import * as diveSheetsCtrl from '../controllers/diveSheets.js';
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js';
// import { checkIfAdmin, checkIfCoach, checkIfDiver, checkIfManager } from '../middleware/role.js';

const router = Router();

router.use(decodeUserFromToken);

router.get('/', checkAuth, diveSheetsCtrl.index)
router.post('/', checkAuth, diveSheetsCtrl.create)
router.get('/:id', checkAuth, diveSheetsCtrl.show)
router.put('/:id', checkAuth, diveSheetsCtrl.update)
router.delete('/:id', checkAuth, diveSheetsCtrl.delete)

export { router }