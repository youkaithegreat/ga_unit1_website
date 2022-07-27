

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


$(() => {
    setInterval(updateTime,1000)
})