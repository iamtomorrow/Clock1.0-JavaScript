
function updateTime() {
    const d = new Date();
    let currentHour = d.getHours();
    let currentMinutes = d.getMinutes();
    let currentSeconds = d.getSeconds();
    let currentDay = d.getDay();
    let currentMonth;
    let currentDayOfWeek;
    switch (d.getMonth()) {
        case 0:
            currentMonth = "January";
            break;
        case 1:
            currentMonth = "February";
            break;
        case 2:
            currentMonth = "March";
            break;
        case 3:
            currentMonth = "April";
            break;
        case 4:
            currentMonth = "May";
            break;
        case 5:
            currentMonth = "June";
            break;
        case 6:
            currentMonth = "July";
            break;
        case 7:
            currentMonth = "August";
            break;
        case 8:
            currentMonth = "September";
            break;
        case 9:
            currentMonth = "October";
            break;
        case 10:
            currentMonth = "November";
            break;
        case 11:
            currentMonth = "December";
            break;
        default:
            console.log("Month error!");
    }
    switch (d.getDate()) {
        case 0:
            currentDayOfWeek = "Sunday";
            break;
        case 1:
            currentDayOfWeek = "Monday";
            break;
        case 2:
            currentDayOfWeek = "Tuesday";
            break;
        case 3:
            currentDayOfWeek = "Wednesday";
            break;
        case 4:
            currentDayOfWeek = "Thursday";
            break;
        case 5:
            currentDayOfWeek = "Friday";
            break;
        case 6:
            currentDayOfWeek = "Saturday";
            break;
    }

    let currentYear = d.getFullYear();
    if (`${currentMinutes}`.length === 1) {
        currentMinutes = `0${currentMinutes}`;
    }
    if (`${currentSeconds}`.length === 1) {
        currentSeconds = `0${currentSeconds}`;
    }
    console.log(currentHour);

    document.querySelector("#full-date").innerHTML = `${currentDayOfWeek} ${currentDay} ${currentMonth}, ${currentYear}`;
    document.querySelector("#full-time").innerHTML = `${currentHour + ":"+ currentMinutes + ":" + currentSeconds}`;
    document.querySelector("#clock-second-hand").style.transform = `rotate(${currentSeconds * 6}deg)`;
    document.querySelector("#clock-minute-hand").style.transform = `rotate(${currentMinutes * 6}deg)`;
    document.querySelector("#clock-hour-hand").style.transform = `rotate(${currentHour * 30}deg)`;
    setTimeout(updateTime, 1000);
}

updateTime();
