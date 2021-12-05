var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VrijwilligersSchema = new Schema({
    werkdagen:  {type: String, required: true},
    naam:  {type: String, required: true},
    email: {type: String, required: true},
    tijdsslot: {type: String, required: true},
    taak: {type: String, required: true},
});

// Virtual for this genre instance URL.
VrijwilligersSchema
    .virtual('url')
    .get(function () {
        return '/Vrijwilliger/'+this._id;
    });

// Export model.
module.exports = mongoose.model('Vrijwilliger', VrijwilligersSchema);
