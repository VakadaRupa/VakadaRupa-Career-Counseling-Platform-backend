import express from 'express';
import { supabase } from '../../src/config/supabase.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// Book a session
router.post('/', requireAuth, async (req, res) => {
  const { counselor_id, start_time, end_time } = req.body;
  const { data, error } = await supabase
    .from('sessions')
    .insert([{
      user_id: req.user.id,
      counselor_id,
      start_time,
      end_time,
      status: 'scheduled'
    }])
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
});

// Get user's sessions
router.get('/my-sessions', requireAuth, async (req, res) => {
  const { data, error } = await supabase
    .from('sessions')
    .select('*, counselor:profiles!counselor_id(*)')
    .or(`user_id.eq.${req.user.id},counselor_id.eq.${req.user.id}`);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

export default router;
