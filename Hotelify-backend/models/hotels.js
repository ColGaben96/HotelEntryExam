var mysql = require("mysql"),
    Schema = mysql.Schema;
var hotelSchema = new Schema({
   Name: {type: String},
   Chain: {type: String},
    Location: {type: String}
});
module.exports = mysql.model('Hotel', hotelSchema);