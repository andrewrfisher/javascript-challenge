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

    //using "this" so it will register whichever input is being used
    var change = d3.select(this);
    //find value of whatever is being changed by user
    var value = change.property("value");
    //grabbing the id of whichever input is being changed by user
    var filter = change.attr("id");
    console.log(filter);

    if (value) {
        filters[filter] = value
    }
    else {
        delete filters[filter]
    }

    var filteredData = tableData;

    Object.entries(filters).forEach(([key,value]) => {
        //append cell to the row for each sighting
        //add value to each cell with .html()
        filteredData = filteredData.filter(sighting => sighting[key] === value);

    });

    
    //display data in data
    tableDisplay(filteredData);
});

