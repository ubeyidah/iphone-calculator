// DOM element
const clockEl = document.querySelector('.clock');




// set up time

const setUpTime = () => {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();

    // format hour
    hour = hour > 12 ?  hour - 12 : hour;

    // display on the page
    clockEl.textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`

}

setUpTime()
setInterval(setUpTime,1000)