// from data.js
var tableData = data;

// YOUR CODE HERE!

//create a table variable that will be used to append rows
var ufoTable = d3.select("tbody");

//console.log(ufoTable);


populateTable(tableData);

var filterButton = d3.select("#filter-btn");
var clearButton = d3.select("#clear-btn");

clearButton.on("click", clearResults)
filterButton.on("click", filterData);



function populateTable(data)
{
    for(i=0; i<data.length; i++){

        //append a row for each ufo sightseeing
        var ufoRow = ufoTable.append("tr");
    
        //append data in columns for each row
        ufoRow.append("td").text(data[i].datetime);
        ufoRow.append("td").text(data[i].city);
        ufoRow.append("td").text(data[i].state);
        ufoRow.append("td").text(data[i].country);
        ufoRow.append("td").text(data[i].shape);
        ufoRow.append("td").text(data[i].durationMinutes);
        ufoRow.append("td").text(data[i].comments);
    }
}

function filterData(){

    ufoTable.html("");

    //get input filter criteria
    var inputDateTime = d3.select("#datetime").property("value"); 
    var inputCity = d3.select("#city").property("value"); 
    var inputState = d3.select("#state").property("value"); 
    var inputCountry = d3.select("#country").property("value"); 
    var inputShape = d3.select("#shape").property("value"); 
    
    console.log(inputDateTime);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);

    var filteredData = data;
    console.log(filteredData);

    if(inputDateTime != "")
        var filteredData = filteredData.filter(function(ufo){
            return ufo.datetime == inputDateTime;
        });   
    //console.log(filteredData);
    
    if(inputCity != "")
        filteredData = filteredData.filter(function(ufo){
            return ufo.city == inputCity;
        });
    //console.log(filteredData);

    if(inputState != "")
        filteredData = filteredData.filter(function(ufo){
            return ufo.state == inputState;
        });
    //console.log(filteredData);

    if(inputCountry != "")
        filteredData = filteredData.filter(function(ufo){
            return ufo.country == inputCountry;
        });
    //console.log(filteredData);

    if(inputShape != "")
        filteredData = filteredData.filter(function(ufo){
            return ufo.shape == inputShape;
        });
    //console.log(filteredData);


    populateTable(filteredData);

}


function clearResults(){

    //reset the table
    ufoTable.html("");

    //reset all filters
    d3.select("#datetime").property("value", ""); 
    d3.select("#city").property("value", ""); 
    d3.select("#state").property("value", ""); 
    d3.select("#country").property("value", ""); 
    d3.select("#shape").property("value", "");

    //populate the table without filters
    populateTable(tableData);
}