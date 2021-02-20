const AppRouter = require("./routes/AppRouter");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");

// Require Middleware
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
// Require Middleware

// Initialize Middleware
app.use(logger("dev"));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "build")));
// Initialize Middleware

app.disable("X-Powered-By");

app.get("/", (req, res) => res.send({ msg: "Server Working" }));
app.use("/api", AppRouter);

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
);

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
