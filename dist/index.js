"use strict";

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _api = require("./routes/api");

var _api2 = _interopRequireDefault(_api);

var _ui = require("./routes/ui");

var _ui2 = _interopRequireDefault(_ui);

var _config = require("../config.json");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoClient = require("mongodb").MongoClient;
var db = void 0;

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

MongoClient.connect(_config2.default.db.uri + _config2.default.db.database, function (err, database) {
  if (err) return console.error(err);
  db = database;

  app.use(_bodyParser2.default.json({
    limit: _config2.default.bodyLimit
  }));

  app.use((0, _cors2.default)({
    exposedHeaders: _config2.default.server.corsHeaders
  }));

  // api router
  app.use("/api", (0, _api2.default)(_config2.default, db));
  // ui router
  console.log("\n\n\n" + __dirname + "\n\n\n");
  app.use("/", _express2.default.static(_path2.default.join(__dirname, "client")));

  app.listen(_config2.default.server.port);
  console.log("Server listening on port " + _config2.default.server.port);
});

// ui router
//app.use("/", ui({ config, db }));
//# sourceMappingURL=index.js.map