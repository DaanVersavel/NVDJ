var express = require('express');
var router = express.Router();

//Require our controllers.
var vrijwilliger_controller = require('../controllers/vrijwilligerController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Vrijwilliger', { title: 'Vrijwilliger' });
});

//post
router.post('/', vrijwilliger_controller.vrijwilliger_create_post );

module.exports = router;