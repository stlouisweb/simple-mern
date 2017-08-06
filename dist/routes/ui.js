"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ui = function ui(config, db) {
  var router = _express2.default.Router();

  console.log(config);

  router.get("/", function (req, res, next) {
    res.json({
      AppName: "rest-api",
      Version: "0.1.0"
    });
  });

  return router;
};

exports.default = ui;
//# sourceMappingURL=ui.js.map