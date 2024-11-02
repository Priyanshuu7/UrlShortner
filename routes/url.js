const express = require("express");
const {
  handleGenNewShortUrl,
  handleGetByShortIdAndUpdate,
  handleGetAnalytics,
} = require("../controllers/url");
const router = express.Router();

// for home route //
router.post("/", handleGenNewShortUrl);

// for short id route //
router.get("/:shortId", handleGetByShortIdAndUpdate);

// for analytics route //
router.get("/analytics/:shortId", handleGetAnalytics);

// here we export model //
module.exports = router;
