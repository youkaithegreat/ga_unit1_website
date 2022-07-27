

const updateTime = () => {

    let dt = new Date();
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let amPm = " AM"
    let date = dt.getMonth()+1 + "/"+dt.getDate()+"/"+dt.getFullYear();

    if (hours >= 12) {
        amPm = " PM"
        hours -= 12
    } else if (hours == 12) {
        amPm = " PM"
    } else {
        amPm = " AM"
    }

    if(minutes <10){
        minutes = "0" + minutes
    }
    $("#date-and-time").text(hours + ":" + minutes + amPm + " " +date)
}

const openNotepad = () => {
    let $resumeDiv = $('<div>').addClass('notepad').attr("id","notepad-container")
  
    $("#main-content").append($resumeDiv)
}

$(() => {
    
    updateTime()
    setInterval(updateTime,30000)

    $('#navigation-container').on("click", function(){
        console.log("click is working")
        openNotepad()
        $(this).off('click');
    })

    var $dragging = null;

    $(document.body).on("mousemove", function(e) {
        if ($dragging) {
            $dragging.offset({
                top: e.pageY,
                left: e.pageX
            });
        }
    });

    $(document.body).on("mousedown", "#notepad-container", function (e) {
        $dragging = $(e.target);
    });

    $(document.body).on("mouseup", function (e) {
        $dragging = null;
    });

})