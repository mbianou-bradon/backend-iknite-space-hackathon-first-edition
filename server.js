require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const carRoutes = require("./routes/cars");
const userRoutes = require("./routes/users");
const cors = require("cors");

// express app
const app = express();

// cors bypassed
app.use(
  cors({
    origin: "localhost:3000/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/cars", carRoutes);
app.use("/api/users", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
