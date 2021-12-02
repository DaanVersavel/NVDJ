var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DJContestSchema = new Schema({
    stem:  {type: String, required: true},


});

// Virtual for this genre instance URL.
DJContestSchema
    .virtual('url')
    .get(function () {
        return '/Line-up/'+this._id;
    });

// Export model.
module.exports = mongoose.model('DJContest', DJContestSchema);
