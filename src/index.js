const resumeArray = ['<link rel="stylesheet" href="/style.css" >',
    '&lt;header&gt;Kevin Yang</header>',
    "<body>",
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

    if (hours > 12) {
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
let lines = 15


const fillNotepad = () => {

    let $code = $('<code>').text(resumeArray[counter])
    let $br = $('<br>')
    counter++
    $("#fill").append($code, $br)

    syntaxHighlights()

    if (counter > lines) {
        isPageFull = true;
    }
    if (isPageFull) {
        $("#fill").children().eq(0).remove()
    }

    if (counter > resumeArray.length) {
        counter = 0
    }

}

const windowsMenu = () => {
    $windowsContainer = $("<div>").attr("id", "windows-container")
    $portfolioDiv = $("<div>").attr('id', 'portfolio-button').addClass("windows").text("Portfolio - Github")
    $resumeDiv = $("<div>").attr('id', 'resume-button').addClass("windows").text("Resume - PDF")
    $weddingPhotography = $("<div>").attr("id", "wedding-photography-button").addClass("windows").text("Wedding Photography")
    $linkedInButton = $("<div>").attr('id', "linkedIn-button").addClass("windows").text("LinkedIn")
    $windowsContainer.append($portfolioDiv, $resumeDiv, $weddingPhotography, $linkedInButton)

    $("#main-content").append($windowsContainer)
    $('#windows-container').hide()
}
const imgArray = ["background (1).jpg", "background (2).jpg",
"background (3).jpg", "background (4).jpg", "background (5).jpg", "background (6).jpg", "background (7).jpg", "background (8).jpg", "background (9).jpg", "background (10).jpg", "background (11).jpg", "background (12).jpg", "background (13).jpg", "background (14).jpg", "background (15).jpg", "background (16).jpg", "background (17).jpg", "background (18).jpg",
"background (19).jpg", "background (20).jpg", "background (21).jpg", "background (22).jpg", "background (23).jpg", "background (24).jpg", "background (25).jpg", "background (26).jpg", "background (27).jpg","camera.jpg", "cleanoffice.jpeg", "flying.jpeg", "gondolafive.jpg", "gondolatwo.jpg", "krew.jpeg", "market.jpg", "ramebackground.jpeg", "seoraktop.jpeg", "soju.jpeg", "trolley.jpeg", "vegas.jpeg", "venicegondolacut.jpg", "villacaletas.jpeg"]
let imgCounter = 0

const changeBackground = () => {
    $('#main-content').css("background-image", `url('img/${imgArray[Math.floor(Math.random()*imgArray.length)]}')`)
}

$(() => {
    windowsMenu()
    updateTime()

    setInterval(updateTime, 30000)
    setInterval(changeBackground, 5000)

    let isNotepadOpen = false
    let isWindowsOpen = false
    let isPDFOpen = false
    let isFroggerOpen = false
    let isCardsOpen = false

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

    $('#windows-icon').on("click", function () {
        if (isWindowsOpen == false) {
            $("#windows-icon").addClass("pressed")
            $('#windows-container').show()
            isWindowsOpen = true
        } else {
            $("#windows-icon").removeClass("pressed")
            $('#windows-container').hide()
            isWindowsOpen = false
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

    $(document).on("mousedown", "#chrome-frogger", function (e) {
        $draggable = $('#chrome-frogger');
    });

    $(document).on("mousedown", "#chrome-cards", function (e) {
        $draggable = $('#chrome-cards');
    });

    $(document).on("mouseup", function (e) {
        $draggable = null;
    });

    $(document).on("touchstart keypress", function (e) {
        fillNotepad()

    })

    if (window.matchMedia("(max-width: 1000px)").matches) {
        lines = 8
    }

    $("#wedding-photography-button").on("click", function () {
        // let $iframe = $("<iframe>").attr("id","inside-browser")
        // $("#main-content").append($iframe)

        // $("#inside-browser").attr("src","http://www.youkaicreations.com")
        window.open("http://www.youkaicreations.com")
    })

    $("#resume-button").on("click", function () {

        if (window.matchMedia("(max-width:1000px").matches) {
            window.open("https://youkaithegreat.github.io/ga_unit1_website/assets/KevinYangWebDevResume2022.pdf")
        }
        else {
            const $pdfDiv = $("<div>").attr("id", 'pdf-div')
            if (isPDFOpen == false) {
                $pdfDiv.append($("<object data ='assets/KevinYangWebDevResume2022.pdf' id='pdf-resume' type='application/pdf'>"))
                $("#main-content").append($pdfDiv)

                isPDFOpen = true
            }
            else {
                $("#pdf-div").remove()
                isPDFOpen = false
            }
        }
    })

    $("#portfolio-button").on("click", function () {
        window.open("http://www.github.com/youkaithegreat")
    })

    $("#linkedIn-button").on("click", function () {
        window.open("https://www.linkedin.com/in/yangkevint/")
    })

    $("#chrome-frogger").on("dblclick touchstart", function () {
        if (isFroggerOpen == true) {
            $("iframe").remove()
            isFroggerOpen = false
        } else {
            $iframe = $("<iframe>").attr("src", "https://youkaithegreat.github.io/ProjectThreeArcadeGame/").attr("id","froggerFrame")
            $("#main-content").append($iframe)
            isFroggerOpen = true
        }
    })

    $("#chrome-cards").on("dblclick touchstart", function(){
        if (isCardsOpen == true) {
            $("iframe").remove()
            isCardsOpen = false
        } else {
            $iframe = $("<iframe>").attr("src", "src/cards.html").attr("id","cardFrame")
            $("#main-content").append($iframe)
            isCardsOpen = true
        }
    })

    $(document).on("keydown", function (e) {
        if (e.key === "Escape") {
            $("#froggerFrame").remove()
            isFroggerOpen = false
            $("#pdf-div").remove()
            isPDFOpen = false
            $("#notepad-container").hide()
            isNotepadOpen = false
            $("#windows-container").hide()
            isWindowsOpen = false
            $("#cardFrame").remove()
            isCardsOpen=false

            $("#windows-icon").removeClass("pressed")
            $("#notepad-icon").removeClass("pressed")
        }
    })


})