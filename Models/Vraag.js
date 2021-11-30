var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VraagSchema = new Schema({
    naam:  {type: String, required: true},
    email: {type: String, required: true},
    vraag: {type: String, required: true}

});

// Virtual for this genre instance URL.
VraagSchema
.virtual('url')
.get(function () {
  return '/Contact/'+this._id;
});

// Export model.
module.exports = mongoose.model('Vraag', VraagSchema);
