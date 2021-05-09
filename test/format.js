var moment = require("moment");

//original format -> 2021-05-04

//Convert a specific format to your desired format
const date = moment("2019/06/01", "YYYY/MM/DD").format("MMMM Do, YYYY");
console.log(date);

//Convert a timestamp to your desired format
var dateString = moment.unix(1620066600).format("MM/DD/YYYY");
console.log(dateString);
