$(document).ready(function () {

    var DateTime = luxon.DateTime

    // displays current date and time at the top of the page
    $("#currentDay").text(DateTime.now().toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY))

    // setting time to 24hr format
    var currentHour = DateTime.now().toFormat("H")
    var timeBlock = $(".text-area")

    // for each element with the class text-area, checks what time it is and color codes accordingly
    function currentTime() {
        timeBlock.each(function() {
            
            var hour = parseInt($(this).parent().attr("id").split("hour")[1])
            if(hour == currentHour){
                $(this).addClass("present")
            } else if (currentHour > hour){
                $(this).addClass("past")
            } else {
                $(this).addClass("future")
            }
        })
    }


    // local storage
    $(".saveBtn").on("click", function () {
        $(this).addClass("active")
        // get the user text input and hour
        var text = $(this).siblings(".text-area").val()
        var time = $(this).parent().attr("id")

        // Save text in local storage
        localStorage.setItem(time, text)
    })

    // Get item from local storage if any
    for(var i=0; i < 9; i++) {
        $(`#hour${i+9} .text-area`).val(localStorage.getItem(`hour${i+9}`))
    }

    currentTime()
})
