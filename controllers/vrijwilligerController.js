var vrijwilligerSchema = require('../Models/VrijwilligersModel')
var express = require('express');
var app = express();
//app.use(bodyParser.urlencoded({ extended: true }));
const { body,validationResult } = require("express-validator");
// Handle Vraag create on POST.
exports.vrijwilliger_create_post = [
    // Validate and sanitize fields.
    body('naam', 'naam required').trim().isLength({ min: 1 }).escape(),
    body('email', 'email required').trim().isLength({ min: 1 }).escape(),
    body('vraag', 'vraag required').trim().isLength({ min: 1 }).escape(),
    body('checkboxWoensdag'),
    body('checkboxDonderdag'),
    body('checkboxVrijdag'),
    body('checkboxZaterdag'),
    body('checkboxZondag'),
    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create Author object with escaped and trimmed data
        var vrijwilliger1 = new vrijwilligerSchema(
            {
                naam:req.body.naam,
                email: req.body.email,
                checkboxWoensdag: req.body.checkboxWoensdag,
                checkboxDonderdag: req.body.checkboxDonderdag,
                checkboxVrijdag: req.body.checkboxVrijdag,
                checkboxZaterdag: req.body.checkboxZaterdag,
                checkboxZondag: req.body.checkboxZondag,
            }
        );
        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('Contact'/*, { title: 'Create vraag', contact: contact, errors: errors.array() }*/);
            return;
        }
        else {
            // Data from form is valid.

            // Save vraag.
            vrijwilliger1.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                res.redirect('Vrijwilliger');
            });
        }
    }
];