const express = require("express");
const router = express.Router();

router.get('/login', (req, res) => {
  res.send('Login Page');
});

router.use(require("../controllers/loginUser"));

module.exports = router;
