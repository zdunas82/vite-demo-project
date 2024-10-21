import express from "express";

const app = express();

//your routes will go here

app.listen(8080, function() {
  console.log("Server is running on port 8080");
});

app.get("/message", function (request, response) {
  response.json({message: "Hello World!"});
});