const express = require("express");
const urlRoute = require("./routes/url");
const app = express();
const PORT = 3001;

app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
