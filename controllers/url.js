const shortid = require("shortid");
const URl = require("../models/url");
async function handleGenNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortId =shortid();
  await URl.create({ shortId, redirectUrl: body.url, visitHistory: [] });
  return res.json({ id: shortId });
}

module.exports = { handleGenNewShortUrl };
