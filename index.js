const express = require("express");
const urlRoute = require("./routes/url");
const path = require("path");
const { connectTomongoDb } = require("./connect");
const URL = require("./models/url");
const app = express();
const PORT = 3001;

// code for ejs //
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// code for test route //
app.get("/test", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", { urls: allUrls });
});

// code for mongodb //
connectTomongoDb("mongodb://localhost:27017/urlshortner")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// middleware//
app.use(express.json());

//home route//
app.use("/url", urlRoute);

// short id route//
app.get("/url/:shortId", urlRoute);

// server listen//
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
