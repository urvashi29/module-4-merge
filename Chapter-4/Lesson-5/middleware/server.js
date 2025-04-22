const express = require("express");
const app = express();

app.use(express.static("public", { maxAge: 600000 })); //middleware
app.use(express.urlencoded()); //middleware
app.use(express.json());

// middleware for specific route
// app.use("/employee", express.json());

app.post("/employee", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.get(
  "/",
  (req, res, next) => {
    req.firstGetMiddleware = "first";
    next();
  },
  (req, res, next) => {
    console.log(req.body);
    res.send("second middle ware executed");
  }
);

// Error handling
app.get("/SyncError", (req, res, next) => {
  try {
    throw new Error("error thrown by endpoint");
  } catch (error) {
    next(error);
    // res.status(500).json({ message: error.message });
  }
});

app.get("/AsyncError", (req, res, next) => {
  setTimeout(() => {
    try {
      throw new Error("error thrown by endpoint async");
    } catch (err) {
      next(err);
    }
  }, 1000);
});

// common custom error middleware
app.use((error, req, res, next) => {
  if (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("listening to port 3000!");
});
