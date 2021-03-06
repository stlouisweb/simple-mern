import http from "http";
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./routes/api";
import config from "../config.json";

let MongoClient = require("mongodb").MongoClient;
let db;

let app = express();
app.server = http.createServer(app);

MongoClient.connect(config.db.uri + config.db.database, (err, database) => {
  if (err) return console.error(err);
  db = database;

  app.use(
    bodyParser.json({
      limit: config.bodyLimit
    })
  );

  app.use(
    cors({
      exposedHeaders: config.server.corsHeaders
    })
  );

  // api router
  app.use("/api", api(config, db));
  // ui router
  app.use("/", express.static(path.join(__dirname, "client")));

  app.listen(config.server.port);
  console.log("Server listening on port " + config.server.port);
});
