// from data.js
var tableData = data;

// YOUR CODE HERE!

//set up variables 
var tbody = d3.select("tbody");

//test out to make sure we have the data
//console.log(tableData);

//create tableDisplay function 
 function tableDisplay(tableData){   
    //loop through data to get each object out of array of objects
    tableData.forEach((sighting) =>{
        //console.log(sighting);
        //start adding the structure of the table so we can add the data
        var row = tbody.append("tr");
        //use object.entries get key,value pairs
        Object.entries(sighting).forEach(([key,value]) => {
            //append cell to the row for each sighting
            //add value to each cell with .text()
            var cell = row.append("td");
            cell.text(value);
        });
    });
 };
 
 //display data in data
 tableDisplay(tableData);


//variables for button and input class for it
var filterButton = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

//creating button.on with variables and actions
filterButton.on("click", () => {

    //prevent page from refreshing
    d3.event.preventDefault();
    //set up variable for inputDate 
    var inputDate =inputField.property("value").trim();
    //filteredDate variable, set up as console.log to test
    var filteredDate = tableData.filter((ufoSighting) =>
        ufoSighting.datetime === inputDate);
    console.log(filteredDate);

    // //"let" allows you to declare variables that are limited to the scope of a block statement
    // let response = {
    //     filteredDate
    // };

    //if statement to account for users input or lack there of
    if (filteredDate.length !==0) {
        tableDisplay(filteredDate);
    }
        else {
            tbody.append("tr").append("td").text("No Results Found!"); 
        }
});


