var vraagSchema = require('../Models/Vraag')

const { body,validationResult } = require("express-validator");
// Handle Vraag create on POST.
exports.vraag_create_post = [
    // Validate and sanitize fields.
    body('naam', 'naam required').trim().isLength({ min: 1 }).escape(),
    body('email', 'email required').trim().isLength({ min: 1 }).escape(),
    body('vraag', 'vraag required').trim().isLength({ min: 1 }).escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create Author object with escaped and trimmed data
        var vraag1 = new vraagSchema(
            {
                naam:req.body.naam,
                email: req.body.email,
                vraag: req.body.vraag,
            }
        );

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('Contact');
            return;
        }
        else {
            // Data from form is valid.
            // Save vraag.
            vraag1.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                res.redirect('submitted');
            });
        }
    }
];