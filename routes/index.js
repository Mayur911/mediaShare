var express = require('express');
var router = express.Router();
var controllers = require('../controllers');
/* GET home page. */
router.get('/', controllers.Users.getUserDetails);
router.post('/addUser', controllers.Users.addUser);
router.post('/login', controllers.Users.login);
router.post('/createGroup', controllers.User_groups.add);
module.exports = router;
