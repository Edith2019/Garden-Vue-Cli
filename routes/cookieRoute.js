const express = require("express");
const router = express.Router();
const cookieCtrl = require("../controllers/cookieCtrl");
router.get("/cookie", cookieCtrl.cookiePost);

module.exports = router;
