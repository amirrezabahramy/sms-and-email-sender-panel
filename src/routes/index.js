const express = require("express");

const router = express.Router();

router.use("/get-discount", require("./get-discount"));

module.exports = router;
