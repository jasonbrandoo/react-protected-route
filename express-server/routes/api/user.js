require('dotenv').config();
const express = require('express');

const router = express.Router();
const jwtkey = process.env.SECRET;
const jwt = require('jsonwebtoken');
const checkAuth = require('../../middlewares/auth');

router.get('/auth', checkAuth, (req, res) => {
  const { name } = req.user;
  console.log(req.user);
  res.json({
    message: 'ok',
    name,
  });
});

router.post('/register', (req, res) => {
  const { fullname, username, password } = req.body;
  if (!fullname || !username || !password) {
    res.status(400).json({
      message: 'Please fill all input fields',
    });
  }
  const user = {
    fullname,
    username,
    password,
  };
  jwt.sign(
    { name: user.username },
    jwtkey,
    { expiresIn: '30s' },
    (err, token) => {
      if (err) {
        res.status(500).json(err);
      }
      res.status(200).json({
        token,
        user,
      });
    },
  );
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      message: 'Please enter valid username and password',
    });
  }
  jwt.sign({ name: username }, jwtkey, { expiresIn: '30s' }, (err, token) => {
    if (err) {
      res.status(400).json(err);
    }
    res.status(200).json({
      token,
      username,
    });
  });
});

module.exports = router;
