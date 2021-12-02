var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Line-up', { title: 'Line-up' });
});

//Require our controllers.
var DJContest_controller = require('../controllers/DJContestController');

//post
router.post('/', DJContest_controller.DJContest_create_post );

module.exports = router;