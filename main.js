// DOM element
const clockEl = document.querySelector('.clock');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const divisionEl = document.querySelector(".division");
const multiplicationEl = document.querySelector(".multiplication");
const subtractionEl = document.querySelector(".subtraction");
const additionEl = document.querySelector(".addition");
const equalEl = document.querySelector(".calculate");


const decimalEl = document.querySelector('.dot');
const zeroEl = document.querySelector('.zero');
const num1El = document.querySelector('.num-1');
const num2El = document.querySelector('.num-2');
const num3El = document.querySelector('.num-3');
const num4El = document.querySelector('.num-4');
const num5El = document.querySelector('.num-5');
const num6El = document.querySelector('.num-6');
const num7El = document.querySelector('.num-7');
const num8El = document.querySelector('.num-8');
const num9El = document.querySelector('.num-9');





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