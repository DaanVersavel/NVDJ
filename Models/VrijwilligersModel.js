var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VrijwilligersSchema = new Schema({
    naam:  {type: String, required: true},
    email: {type: String, required: true},
    checkboxWoensdag: {type: String, required: true},
    checkboxDonderdag: {type: String, required: true},
    checkboxVrijdag: {type: String, required: true},
    checkboxZaterdag: {type: String, required: true},
    checkboxZondag: {type: String, required: true}

});

// Virtual for this genre instance URL.
VrijwilligersSchema
    .virtual('url')
    .get(function () {
        return '/Vrijwilliger/'+this._id;
    });

// Export model.
module.exports = mongoose.model('Vrijwilliger', VrijwilligersSchema);
