var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VrijwilligersSchema = new Schema({
    naam:  {type: String, required: true},
    email: {type: String, required: true},
    checkboxWoensdag: {type: String},
    checkboxDonderdag: {type: String},
    checkboxVrijdag: {type: String},
    checkboxZaterdag: {type: String},
    checkboxZondag: {type: String}
});

// Virtual for this genre instance URL.
VrijwilligersSchema
    .virtual('url')
    .get(function () {
        return '/Vrijwilliger/'+this._id;
    });

// Export model.
module.exports = mongoose.model('Vrijwilliger', VrijwilligersSchema);
