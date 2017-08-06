#!/usr/bin/env node

console.log("HELLO");

var fs = require("fs");
var path = require("path");
var npmRun = require("npm-run");

if (fs.existsSync(path.join(__dirname, "client"))) {
  console.log("client exists");
  npmRun.exec("run dev", {}, function(err, stdout, stderr) {
    // err Error or null if there was no error
    // stdout Buffer|String
    // stderr Buffer|String
  });
  return;
} else {
  console.log("client does not exist");
  fs.mkdirSync(path.join(__dirname, "client"));
  return;
}
