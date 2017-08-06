"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = function api(config, db) {
  var router = _express2.default.Router();

  console.log(config);

  router.get("/", function (req, res, next) {
    res.json({
      AppName: "rest-api",
      Version: "0.1.0"
    });
  });

  router.get("/test", function (req, res, next) {
    db.collection("test").find({}).toArray(function (err, docs) {
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

exports.default = api;
//# sourceMappingURL=api.js.map