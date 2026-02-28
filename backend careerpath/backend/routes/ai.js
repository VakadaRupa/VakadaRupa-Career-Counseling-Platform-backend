import express from 'express';
import { requireAuth } from '../middleware/auth.js';
import { getRecommendations } from '../controllers/aiController.js';

const router = express.Router();

router.post('/recommendations', requireAuth, getRecommendations);

export default router;
