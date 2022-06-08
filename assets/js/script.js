$(document).ready(function () {

var DateTime = luxon.DateTime
var past = DateTime.minus({hours: 1})
var present = DateTime.now()
var future = DateTime.plus({hours: 1})

// displays current date and time at the top of the page
$("#currentDay").text(DateTime.now().toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY))

// if DateTime.now is > past, then color textarea grey
// if 
var setColors = document.getElementById("text-area")
$("text-area").each(function(){
    var val = parseInt($(this).prop("id"))

    if(val > DateTime && val < future){
        $(this).css("background-color", "blue")
    }
})

})