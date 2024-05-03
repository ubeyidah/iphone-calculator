// DOM element
const clockEl = document.querySelector('.clock');




// set up time

const setUpTime = () => {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();

    // format hour
    hour = hour > 12 ?  hour - 12 : hour;
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}`  : minute;

    // display on the page
    clockEl.textContent = `${hour}:${minute}`

}

setUpTime()
setInterval(setUpTime,1000)