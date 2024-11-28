const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
// code for mongodb //
async function connectToMongoDB(url) {
  return mongoose.connect(url);
}

// export function //
module.exports = { connectToMongoDB };
