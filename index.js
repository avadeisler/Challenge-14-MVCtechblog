const express = require("express");

const app = express();

app.use((req,res) => {
  console.log(req.method, req.url);
  res.end("Hello")
});

server.listen(3001)