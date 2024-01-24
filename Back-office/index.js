const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3020;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API Ready To GO!");
});

// Middleware for authentication
app.use(require("./middlewares/authentication"));

// Routes
app.use("/auth", require("./routers/auth"));
app.use("/products", require("./routers/product"));

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
