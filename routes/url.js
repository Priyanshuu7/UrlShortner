const express = require("express");
const {
  handleGenNewShortUrl,
  handleGetByShortIdAndUpdate,
  handleGetAnalytics,
} = require("../controllers/url");
const router = express.Router();



// for home route //
router.post("/", handleGenNewShortUrl);
router.get("/:shortId", handleGetByShortIdAndUpdate);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
