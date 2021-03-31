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


// //defining function regarding clicking the button in-line

// filterButton.on("click", function(){
//     //test with console.log to make sure it's working
//     console.log("A button was clicked");
//     console.log(d3.event.target);

//     //prevent page from refreshing
//     d3.event.preventDefault();

//     //set up if statement to pull data related to what user inputs
//     //account for no input and input not within time period of data
//     if (inputField.trim() === "") {
//         var filteredData = tableData;
//     }   
//     else {
//         //make filteredData variable that equals what user inputs and grab corresponding data
//         var filteredData = tableData.filter(sighting =>
//             ufoSighting.datetime === inputField.trim());  
//     };

//     //if input is not in the dataset, then display a message to inform user
//     if (filteredData.length == 0) {
//         //found code that helps collapse table and displays message
//         d3.select("tbody")
//         .append("tr")
//         .append("td")
//             .attr("colspan", 7)
//             .html(<h3>No Records Found</h3>)
//     };

// });


