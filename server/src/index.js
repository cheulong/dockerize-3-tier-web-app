import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({
    user: "TestUser2",
  });
});

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log("Listening on PORT", port);
});
