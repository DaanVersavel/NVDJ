var async = require('async')
var vraagSchema = require('../Models/Vraag')
const bodyParser = require("body-parser");
var express = require('express');
var app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
const { body,validationResult } = require("express-validator");

// Handle Vraag create on POST.
exports.vraag_create_post = [

    // Validate and sanitize fields.
    body('email', 'email required').trim().isLength({ min: 1 }).escape(),
    body('vraag', 'vraag required').trim().isLength({ min: 1 }).escape(),



    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create Author object with escaped and trimmed data
        var vraag1 = new vraagSchema(
            {
                email: req.body.email,
                vraag: req.body.vraag,
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
            vraag1.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                res.redirect('Contact');
            });
        }
    }
];