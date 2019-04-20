"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // Serve static files from the React app

app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client/build'))); // Put all API endpoints under '/api'

app.get('/api/passwords', function (req, res) {
  var count = 5; // Generate some passwords

  var passwords = [12, 34, 545, 57, 356, 245]; // Return them as json

  res.json(passwords);
  console.log("Sent ".concat(count, " passwords"));
}); // The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.

app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname + '/client/build/index.html'));
});
var port = process.env.PORT || 5000;
app.listen(port);
console.log("Password generator listening on ".concat(port));
//# sourceMappingURL=index.js.map