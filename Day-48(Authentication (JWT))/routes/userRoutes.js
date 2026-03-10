const express = require('express');
const router = express.Router();
const validateUser = require('../middleware/validateUser');

let users = [
  { id: 1, name: "Roshni", email: "rj45@gmail.com" },
  { id: 2, name: "Neev", email: "rn07@gmail.com" }
];

// Search users
router.get('/', (req, res) => {
  const search = req.query.search || '';
  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );
  res.render('users', { users: filteredUsers, search });
});

// Add user (with validation middleware)
router.post('/add', validateUser, (req, res) => {
  const { name, email } = req.body;
  const id = users.length ? users[users.length - 1].id + 1 : 1;
  users.push({ id, name, email });
  res.redirect('/users');
});

// Delete user
router.post('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.redirect('/users');
});

module.exports = router;
