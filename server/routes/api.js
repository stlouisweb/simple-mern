import express from "express";

let api = (config, db) => {
  let router = express.Router();

  console.log(config);

  router.get("/", (req, res, next) => {
    res.json({
      AppName: "rest-api",
      Version: "0.1.0"
    });
  });

  router.get("/test", (req, res, next) => {
    db.collection("test").find({}).toArray((err, docs) => {
      if (err) {
        console.error(err);
        res.status(500).json({ messsage: "server error" });
      } else {
        res.status(200).json(docs);
      }
    });
  });

  return router;
};

export default api;
