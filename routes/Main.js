var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Main', { title: 'Home' });
});
/* GET Contact page. */
router.get('/Contact', function(req, res, next) {
    res.render('Contact', { title: 'Contact' });
});
/* GET FAQ page. */
router.get('/FAQ', function(req, res, next) {
    res.render('FAQ', { title: 'FAQ' });
});
/* GET Info page. */
router.get('/Info', function(req, res, next) {
    res.render('Info', { title: 'Info' });
});
/* GET Line-up page. */
router.get('/Line-up', function(req, res, next) {
    res.render('Line-up', { title: 'Line-up' });
});
/* GET Locatie page. */
router.get('/Locatie', function(req, res, next) {
    res.render('Locatie', { title: 'Locatie' });
});
/* GET Tickets page. */
router.get('/Tickets', function(req, res, next) {
    res.render('Tickets', { title: 'Tickets' });
});
/* GET Vrijwilliger page. */
router.get('/Vrijwilliger', function(req, res, next) {
    res.render('Vrijwilliger', { title: 'Vrijwilliger' });
});


module.exports = router;