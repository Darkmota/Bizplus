const express = require("express");
const proxy = require("http-proxy-middleware");

const app = express();

app.use(
  "/imgs",
  proxy({
    target: "http://localhost:3000/",
    changeOrigin: true
  })
);

app.listen(3000);
