var express = require('express');
var router = express.Router();

//Require our controllers.
var Contact_controller = require('../controllers/ContactController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Contact', { title: 'Express' });
});

//post
router.post('/', Contact_controller.vraag_create_post );



module.exports = router;