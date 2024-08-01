require("dotenv").config({
  path: require("node:path").join(__dirname, `../.env.${process.env.NODE_ENV}`),
});

const express = require("express");

const app = express();

app.use(
  require("cors")({
    methods: ["POST"],
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());

// Routes
app.use("/api/v1", require("./routes"));

// App start
const { APP_PORT, APP_HOSTNAME } = process.env;

app.listen(APP_PORT, APP_HOSTNAME, () => {
  console.log(
    `App is running on port: ${APP_PORT} and hostname: ${APP_HOSTNAME}.`
  );
});
