const { nanoid } = require("nanoid");
const URl = require("../models/url");
async function handleGenNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortId = nanoid(8);
  await URl.create({ shortId, redirectUrl: body.url, visitHistory: [] });
  return res.json({ id: shortId });
}

module.exports = { handleGenNewShortUrl };
