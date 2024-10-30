const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

async function connectTomongoDb(url) {
  return mongoose.connect(url);
}

module.exports = { connectTomongoDb };
