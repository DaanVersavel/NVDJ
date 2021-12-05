var DJContestSchema = require('../Models/DJContestModel')

const { body,validationResult } = require("express-validator");
// Handle djContest create on POST.
exports.DJContest_create_post = [
    // Validate and sanitize fields.
    body('naam', 'Naam required').trim().isLength({ min: 1 }).escape(),
    body('email', 'Email required').trim().isLength({ min: 1 }).escape(),
    body('artiest', 'Dj naam required').trim().isLength({ min: 1 }).escape(),
    body('inzending', 'Link required').trim().isLength({ min: 1 }).escape(),


    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create Author object with escaped and trimmed data
        var inzending = new DJContestSchema(
            {
                naam:req.body.naam,
                email: req.body.email,
                artiest: req.body.artiest,
                inzending:req.body.inzending,
            }
        );
        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('line-up');
            return;
        }
        else {
            // Data from form is valid.
            // Save vraag.
            inzending.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to line-up.
                res.redirect('submitted');
            });
        }
    }
];