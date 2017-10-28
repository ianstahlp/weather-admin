var weather = require("weather-js");
// var inquirer = require("inquirer");
var fs = require("fs");
var moment = require("moment")


var UserSearch = function(name, location) {
    this.name = name;
    this.location = location;
    this.date = moment().format("MM/DD/YYYY");

    this.getWeather = function() {
        weather.find({ search: this.location, degreeType: 'F' }, function(err, result) {
            if (err) { 
            	console.log(err); 
            }
            console.log(JSON.stringify(result[0].current.temperature, null, 2) + " degrees F");
        });
    }
}

module.exports = UserSearch;
// inquirer.prompt([

//     {
//         name: "name",
//         message: "What's is your name?",
//         validate: function(value) {
//             if (typeof value === "string") {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//     },
//     {
//         name: "location",
//         message: "What location?",
//         validate: function(value) {
//             if (typeof value === "string") {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }


// ]).then(function(answers) {
//     var newSearch = new weatherSearch(
//         "Name: " + answers.name + "\n" + "Location: " + answers.location )

// });