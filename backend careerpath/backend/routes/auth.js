import express from 'express';
import { supabase } from '../../src/config/supabase.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, metadata } = req.body;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: metadata }
  });
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

router.get('/me', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error) return res.status(401).json({ error: error.message });
  res.json(user);
});

export default router;
