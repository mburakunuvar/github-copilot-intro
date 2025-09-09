const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Demo user credentials
const USER = {
  email: 'user@example.com',
  password: 'password123'
};

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password required.' });
  }
  if (email === USER.email && password === USER.password) {
    return res.json({ success: true, message: 'Login successful.' });
  }
  return res.status(401).json({ success: false, message: 'Invalid credentials.' });
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
