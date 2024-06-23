const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const connectToMongo = require("./db");

dotenv.config();
connectToMongo();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/covid", require("./routes/covid"));

app.get("/", (req, res) => {
  res.send("Backend running successfully!");
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
