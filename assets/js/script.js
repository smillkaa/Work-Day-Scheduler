$(document).ready(function () {

    var DateTime = luxon.DateTime

    // displays current date and time at the top of the page
    $("#currentDay").text(DateTime.now().toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY))

    var currentHour = DateTime.now().toFormat("H")
    var timeBlock = $(".text-area");

    // for each element with the class text-area, checks what time it is and color codes accordingly
    timeBlock.each(function() {
        
        var hour = parseInt($(this).attr("id").split("hour")[1]) // i don't understand this
        if(hour == currentHour){
            $(this).addClass("present")
        } else if (currentHour > hour){
            $(this).addClass("past")
        } else {
            $(this).addClass("future")
        }
    })

}) // document get ready function ends

// local storage
// var btnEl = $("textarea[type='submit']")
// btnEl.on("click", function(event){
//     event.preventDefault()
    
// })
