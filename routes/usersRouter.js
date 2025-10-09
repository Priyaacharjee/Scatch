const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/authController')


router.get("/", function (req, res) {
    res.send("hey its user");
})

router.post("/register",registerUser);

// PRIYA start doing from login route,everything before that is done

module.exports = router;
