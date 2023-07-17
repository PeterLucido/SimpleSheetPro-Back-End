import express from 'express';
import * as divesCtrl from '../controllers/dives.js';

export const router = express.Router();

router.get('/', divesCtrl.getDives);
