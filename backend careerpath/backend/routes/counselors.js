import express from 'express';
import { supabase } from '../../src/config/supabase.js';

const router = express.Router();

// Get all counselors
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('role', 'counselor');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Get counselor by ID
router.get('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', req.params.id)
    .single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

export default router;
