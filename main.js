const clockEl = document.querySelector('.clock');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');
const displayEl = document.querySelector('.display');

const divisionEl = document.querySelector(".division");
const multiplicationEl = document.querySelector(".multiplication");
const subtractionEl = document.querySelector(".subtraction");
const additionEl = document.querySelector(".addition");
const equalEl = document.querySelector(".calculate");


const decimalEl = document.querySelector('.dot');
const numbersEl = document.querySelectorAll('.number');



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


// working on calculator
const handleNumClick = (numStr) => {
  if(displayEl.textContent === '0'){
    displayEl.textContent = numStr;
  }else{
    displayEl.textContent += numStr;
  }
}


// add eventlistner to all numbers 
numbersEl.forEach(number => {
  number.addEventListener('click', (e) => {
   handleNumClick(e.target.textContent.toString())
  })
})

