const express = require("express");
const urlRoute = require("./routes/url");
const { connectTomongoDb } = require("./connect");
const URL = require("./models/url"); // Ensure correct case

const app = express();
const PORT = 3001;

connectTomongoDb("mongodb://localhost:27017/urlshortner")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use(express.json());

app.use("/url", urlRoute);
app.get("/:shortId", urlRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
