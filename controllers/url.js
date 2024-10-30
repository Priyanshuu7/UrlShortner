const shortid = require("shortid");
const URL = require("../models/url"); // Ensure correct case

async function handleGenNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });
  const shortId = shortid.generate(); // Use `generate()` method
  await URL.create({ shortId, redirectUrl: body.url, visitHistory: [] });
  return res.json({ id: shortId });
}

async function handleGetByShortIdAndUpdate(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectUrl);
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalclicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}
module.exports = {
  handleGenNewShortUrl,
  handleGetByShortIdAndUpdate,
  handleGetAnalytics,
};
