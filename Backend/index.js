const express = require("express");
// const cors = require("cors");
const newsr = express.Router();
const app = express();

// app.use(cors());
// const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello ");
// });

newsr.get("/", async (req, res) => {
  try {
    var url =
      "http://newsapi.org/v2/top-headlines?" +
      "country=in&" +
      "apiKey=36f3e29b704f41339af8439dc1228334";

    const news_get = await fetch(url);
    res.render("news", { articles: news_get.data.articles });
  } catch (error) {
    if (error.response) {
      console.log(error);
    }
  }
});

app.listen(3500, () => {
  console.log("I am live");
});
