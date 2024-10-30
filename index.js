const express = require("express");
const urlRoute = require("./routes/url");
const { connectTomongoDb } = require("./connect");

const app = express();
const PORT = 3001;

connectTomongoDb("mongodb://localhost:27017/urlshortner").then(() => {
  console.log("MongoDb connected");
});

app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
