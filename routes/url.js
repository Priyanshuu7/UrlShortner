const express = require("express");
const {
  handleGenNewShortUrl,
  handleGetByShortIdAndUpdate,
} = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenNewShortUrl);
router.get("/:shortId", handleGetByShortIdAndUpdate);

module.exports = router;
