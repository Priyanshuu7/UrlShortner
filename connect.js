const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
// code for mongodb //
async function connectTomongoDb(url) {
  return mongoose.connect(url);
}
module.exports = { connectTomongoDb };
