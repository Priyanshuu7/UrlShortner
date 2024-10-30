const express = require("express");
const { handleGenNewShortUrl } = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenNewShortUrl);

module.exports = router;
