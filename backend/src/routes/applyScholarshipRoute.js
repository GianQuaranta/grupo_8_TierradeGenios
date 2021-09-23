const express = require("express");
const applyScholarship = require("../controllers/applyScholarshipController");
const router = express.Router();

router.get("/apply-scholarship", applyScholarship.show)


module.exports = router;