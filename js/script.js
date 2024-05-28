// alert('working');

// Initialize the datepicker
$(document).ready(function() {
    $("#datepicker").datepicker();
});

// Intialise datepicker on the inputs:
$("#start-date").datepicker({
    dateFormat: "dd-mm-yy",
    onSelect: function() {
        const startDate = $("#start-date").datepicker("getDate");
        console.log(startDate);
        // run calculate function:
         calculateDays()  
    }
});

$("#end-date").datepicker({
    // yy-mm-dd
    dateFormat: "dd-mm-yy",
    onSelect: function() {
        const endDate = $("#end-date").datepicker("getDate");
        console.log(endDate);
        // run calculate function:
        calculateDays();
    }
});

// Calculate the difference between the two dates:
function calculateDays() {
    const startDate = $("#start-date").datepicker("getDate");
    const endDate = $("#end-date").datepicker("getDate");

    // check if we have a start date and an end date
    if (startDate && endDate) {
        // calculate the difference:
        const timeDiff = Math.abs(endDate.getTime() - startDate.getTime())// make sure the number is a positive number
        console.log(timeDiff);

        const diffDays = Math.ceil(timeDiff / (1000 * 3600 *24));
        console.log(diffDays);

        // update number of days span
        $("#number-of-days").text(diffDays);
        // return diffDays to make it accessable to the popluate function
        return diffDays;
    } else {
        // make sure number of days is empty:
        $("#number-of-days").text(""); // set it to empty text
    }
}


// -------*** Map ***-------
mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [174.78377235947815, -41.29103163693185],
    zoom: 4
});

map.on('load', function() {
    map.resize();
});
