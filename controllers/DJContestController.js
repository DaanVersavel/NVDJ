var DJContestSchema = require('../Models/DJContestModel')

const { body,validationResult } = require("express-validator");
// Handle djContest create on POST.
exports.DJContest_create_post = [
    // Validate and sanitize fields.
    body('stem', 'naam required').trim().isLength({ min: 1 }).escape(),


    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create Author object with escaped and trimmed data
        var stem1 = new DJContestSchema(
            {
                stem:req.body.stem,
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
            stem1.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to line-up.
                res.redirect('submitted');
            });
        }
    }
];