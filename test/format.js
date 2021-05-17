var moment = require("moment");

//original format -> 2021-05-04

//Convert a specific format to your desired format
const date = moment("2019/06/01", "YYYY/MM/DD").format("MMMM Do, YYYY");
console.log(date);

//Convert a timestamp to your desired format
var dateString = moment.unix(1620066600).format("MM/DD/YYYY");
console.log(dateString);

let today = moment().format("DD MMMM YYYY");

let tomorrow = moment().add(1, "days").format("DD MMMM YYYY");

console.log(today);
console.log(tomorrow);

console.log(moment(today).isSame("17 May 2021"));
