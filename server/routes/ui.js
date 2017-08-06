import express from "express";

let ui = (config, db) => {
  let router = express.Router();

  console.log(config);

  router.get("/", (req, res, next) => {
    res.json({
      AppName: "rest-api",
      Version: "0.1.0"
    });
  });

  return router;
};

export default ui;
