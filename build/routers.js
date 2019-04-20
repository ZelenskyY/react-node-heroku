"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  return res.json({
    "status": "ok",
    "message": {
      "tasks": [{
        "id": 1,
        "username": "Test User",
        "email": "test_user_1@example.com",
        "text": "Hello, world!",
        "status": 10
      }, {
        "id": 3,
        "username": "Test User 2",
        "email": "test_user_2@example.com",
        "text": "Hello from user 2!",
        "status": 0
      }, {
        "id": 4,
        "username": "Test User 3",
        "email": "test_user_3@example.com",
        "text": "Hello from user 3!",
        "status": 0
      }],
      "total_task_count": "5"
    }
  });
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=routers.js.map