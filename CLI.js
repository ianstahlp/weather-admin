var inquirer = require("inquirer");
var user = require("./User.js")
var admin = require("./Admin.js")
var fs = require("fs");

inquirer.prompt([

    {
        name: "adminOrUser",
        message: "User or Admin?",
        type: "list",
        choices: ["User", "Admin"]
    }

]).then(function(o) {

    if (o.adminOrUser === "Admin") {
    	var newAdmin = new admin()

    	
    	newAdmin.getData();


    } else {

        inquirer.prompt([

            {
                name: "name",
                message: "What's your name?",
                type: "input",
            },

            {
                name: "location",
                message: "What location?",
                type: "input",
            }
        ]).then(function(answers) {

            var userSearch = new user(answers.name, answers.location);
            
            var userContent = userSearch.name + "\n" + userSearch.location + "\n" + userSearch.date
            


            userSearch.getWeather();
            fs.appendFile("searches.txt", userContent + ",", function(err) {

                // If an error was experienced we say it.
                if (err) {
                    console.log(err);
                }

                // If no error is experienced, we'll log the phrase "Content Added" to our node console.
               

            });


        })



    }

});