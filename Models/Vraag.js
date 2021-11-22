var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const faqSchema = new Schema({
    Naam: {type:String},
    Vraag: {type:String}
})

module.export= mongoose.model("Vraag", faqSchema);