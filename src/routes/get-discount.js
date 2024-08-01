const express = require("express");
const { getDiscount } = require("../controllers/get-discount");

const router = express.Router();

router.route("/").post(getDiscount);

module.exports = router;
