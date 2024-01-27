const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const sqlText = `
  SELECT * FROM favorites ORDER BY "id" desc
  `;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  let newFavorite = req.body;

  const sqlText = `INSERT INTO "favorites" ( "title", "url", "category_id")
      VALUES ($1, $2, $3);`;

  const queryParams = [
    newFavorite.title,
    newFavorite.url,
    newFavorite.category_id,
  ];

  pool
    .query(sqlText, queryParams)
    .then((res) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("ERROR in server POST route");
      console.log(error);
    });
});

// update a favorite's associated category
router.put("/:id", (req, res) => {
  const sqlText = `UPDATE "favorites" SET "category_id"=$1 WHERE "id" = $2;`;
  const queryParams = [req.body.category_id, req.params.id];
  pool
    .query(sqlText, queryParams)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("ERROR in server POST route");
      console.log(error);
    });
});

// delete a favorite
router.delete("/:id", (req, res) => {
  const sqlText = `DELETE FROM "favorites" WHERE "id" = $1;`;
  const queryParams = [req.params.id];
  pool
    .query(sqlText, queryParams)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("ERROR in server POST route");
      console.log(error);
    });
});

module.exports = router;
