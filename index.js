const resumeArray = ['<link rel="stylesheet" href="/style.css" >', 
    '<header>Kevin Yang</header>', 
    '<body>',
    '<h1> About Me </h1>', 
    '<p> My name is Kevin Yang </br>',
    '<img id="headshot" src="kevinphoto.jpg">',
    "I'm a software developer, wedding photographer and an (unpublished) author. <br>",
    "My main hobby is currently avoiding COVID-19, but I should have accomplished that by next month. <br>",
    "The Software Developer and Wedding Photographer tabs will tell you more information about me! <br>",
    '<a href="index.html">Kevin Yang</a>',
    '<a href="resume.html">Software Developer</a>',
    '<a href="www.youkaicreations.com"> Wedding Photographer </a>',
    '<a href="author.html"> Author </a>',
    'Feel free to visit my social and my github <br></p>',
    'kevintyang.html',
    'a class ="icons" href="https://www.linkedin.com/in/yangkevint/"><i class="fab fa-linkedin"></i></a>',
    '<a class ="icons" href="https://www.facebook.com/KevinTYang/"><i class="fab fa-facebook-square"></i></a>',
    '<a class ="icons" href="https://www.instagram.com/youkaicreations"><i class="fab fa-instagram"></i></a>',
    '<a class ="icons" href="https://github.com/youkaithegreat"><i class="fab fa-github-square"></i></a>',
    '</p>',
    '</body>', '<!-- Also, warning "Wedding Photographer" takes you somewhere else and you can only come back with back button.-->']

const updateTime = () => {

    let dt = new Date();
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let amPm = " AM"
    let date = dt.getMonth() + 1 + "/" + dt.getDate() + "/" + dt.getFullYear();

    if (hours >= 12) {
        amPm = " PM"
        hours -= 12
    } else if (hours == 12) {
        amPm = " PM"
    } else {
        amPm = " AM"
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    $("#date-and-time").text(hours + ":" + minutes + amPm + " " + date)
}

const openNotepad = () => {
    let $resumeDiv = $('<div>').addClass('notepad').attr("id", "notepad-container")
    let $fill = $("<div>").attr("id", "fill")
    $resumeDiv.append($fill)
    $("#main-content").append($resumeDiv)
    $("#notepad-container").hide()
}

let counter = 0

let isPageFull = false
    

const fillNotepad = () => {

    let $p = $('<p>').text(resumeArray[counter])
    counter++
    $("#fill").append($p)

    if(counter >15){
        isPageFull=true;
    }
    if(isPageFull){
        $("#fill").children().eq(0).remove()
    }

    if(counter > resumeArray.length){
        counter = 0
    }
}

$(() => {

    updateTime()
    setInterval(updateTime, 30000)
    let isNotepadOpen = false

    openNotepad()

    $('#notepad-icon').on("click", function () {
        if (isNotepadOpen == false) {
            $("#notepad-icon").addClass("pressed")
            $('#notepad-container').show()
            isNotepadOpen = true
        } else {
            $("#notepad-icon").removeClass("pressed")
            $('#notepad-container').hide()
            isNotepadOpen = false
        }
    })

    let $draggable = null;

    $(document).on("mousemove", function (e) {
        if ($draggable) {
            $draggable.offset({
                top: e.pageY,
                left: e.pageX
            });
        }
    });

    $(document).on("mousedown", "#notepad-container", function (e) {
        $draggable = $('#notepad-container');
    });

    $(document).on("mouseup", function (e) {
        $draggable = null;
    });

    $(document).on("touchstart keypress", function (e) {
        fillNotepad()
    })

})