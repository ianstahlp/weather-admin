// fs is a core Node package for reading and writing files
var fs = require("fs");
var user = require("./user.js")

// create a constructor for admin

var weatherAdmin = function() {
    this.getData = function() {
        fs.readFile("searches.txt", "utf8", function(error, data) {

            if (error) {
                return console.log(error);
            }

            var dataArr = data.split(",");
            for (i = 0; i < dataArr.length; i++) {
                console.log(dataArr[i] + "\n");
            }
        });

    }

    this.weatherSearch = function() {
    	var findTemp = user.getWeather
    	findTemp();
    }
}

module.exports = weatherAdmin;