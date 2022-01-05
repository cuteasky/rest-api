import express from 'express';
import {
  getCeritas,
  getCerita,
  saveCerita,
  updateCerita,
  deleteCerita,
} from '../controllers/ceritaController.js';

const router = express.Router();

router.get('/', getCeritas);
router.get('/:id', getCerita);
router.post('/', saveCerita);
router.patch('/:id', updateCerita);
router.delete('/:id', deleteCerita);

export default router;
