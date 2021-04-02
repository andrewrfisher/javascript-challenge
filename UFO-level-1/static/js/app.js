// from data.js
var tableData = data;

// YOUR CODE HERE!

//set up variables 
var tbody = d3.select("tbody");

//test out to make sure we have the data
//console.log(tableData);

//create tableDisplay function 
 function tableDisplay(tableData){ 
    tbody.html("") ;
    //loop through data to get each object out of array of objects
    tableData.forEach((sighting) =>{
        //console.log(sighting);
        //start adding the structure of the table so we can add the data
        var row = tbody.append("tr");
        //use object.entries get key,value pairs
        Object.entries(sighting).forEach(([key,value]) => {
            //append cell to the row for each sighting
            //add value to each cell with .html()
            var cell = row.append("td");
            cell.html(value);
        });
    });
 };
 
 //display data in data
 tableDisplay(tableData);


//variables for button and input class for it
var filterButton = d3.select("#filter-btn");
var inputs = d3.selectAll("input")


//filter variable to hold key value pairs
var filters = {}

//creating button.on with variables and actions
//cannot use fat arrow in order preserve "this" functionality
inputs.on("change",function() {

    //prevent page from refreshing
    d3.event.preventDefault();

    var change = d3.select(this);
    var value = change.property("value");
    var filter = change.attr("id");
    console.log(filter);

    if (value) {
        filters[filter] = value
    }
    else {
        delete filters[filter]
    }



    // //set up variable for inputDate/City/State - using toLowerCase to account for user input
    // var inputDate =inputField1.property("value").trim();
    // var inputCity = inputField2.property("value").toLowerCase().trim();
    // var inputState = inputField3.property("value").toLowerCase().trim();
    var filteredData = tableData;

    Object.entries(filters).forEach(([key,value]) => {
        //append cell to the row for each sighting
        //add value to each cell with .html()
        filteredData = filteredData.filter(sighting => sighting[key] === value);

    });

    // //filteredDate variable, set up as console.log to test
    // var filteredData = data.filter((data) =>
    //     data.datetime === inputDate);
    // console.log(filteredDate);



    // //filteredCity variable
    // var filteredCity = data.filter(data => 
    //     data.city === inputCity);
    // console.log(filteredCity);
    // //filteredState variable
    // var filteredState = data.filter(data => 
    //     data.state === inputState);
    // console.log(filteredState);
    // //now create full filteredData variable so the whole search can work together
    // var filteredData = data.filter(data => 
    //     data.datetime === inputDate && data.city === inputCity && data.state === inputState);
	// console.log(filteredData);


    // // //"let" allows you to declare variables that are limited to the scope of a block statement
    // // let response = {
    // //     filteredDate, filteredCity, filteredState
    // // };

    // // //if statement to account for users input or lack there of
    // // if (filteredData.length !==0) {
    // //     tableDisplay(filteredData);
    // // }
    // //     else if (response.filteredData.length === 0 && ((response.filteredCity.length !== 0 || response.filteredDate.length !== 0 || response.filteredState.length !== 0))){
    // //     tableDisplay(filteredCity) || tableDisplay(filteredDate) || tableDisplay(filteredState);
    
    // //     else {
    // //         tbody.append("tr").append("td").text("No Results Found!"); 
    // //     }

    //display data in data
    tableDisplay(filteredData);
});

