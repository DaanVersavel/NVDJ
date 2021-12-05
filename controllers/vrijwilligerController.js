var vrijwilligerSchema = require('../Models/VrijwilligersModel')

const { body,validationResult } = require("express-validator");
// Handle Vraag create on POST.
exports.vrijwilliger_create_post = [
    // Validate and sanitize fields.
    body('werkdagen', 'werkdagen required').trim().isLength({ min: 1 }).escape(),
    body('naam', 'naam required').trim().isLength({ min: 1 }).escape(),
    body('email', 'email required').trim().isLength({ min: 1 }).escape(),
    body('tijdsslot', 'Tijdsslot required').trim().isLength({ min: 1 }).escape(),
    body('taak', 'Taak required').trim().isLength({ min: 1 }).escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create Author object with escaped and trimmed data
        var vrijwilliger1 = new vrijwilligerSchema(
            {
                werkdagen:req.body.werkdagen,
                naam:req.body.naam,
                email: req.body.email,
                tijdsslot: req.body.tijdsslot,
                taak: req.body.taak,
            }
        );
        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('vrijwilliger');
            return;
        }
        else {
            // Data from form is valid.
            // Save vraag.
            vrijwilliger1.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                res.redirect('submitted');
            });
        }
    }
];