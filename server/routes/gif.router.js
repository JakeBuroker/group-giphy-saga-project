const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios");
const router = express.Router();

router.post("/", (req, res) => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.body.ourInput}&limit=10`
      )
      .then((response) => {
        res.send(response.data)
      })
      .catch((err) => {
        console.log(err);
      });});
    
module.exports = router;
