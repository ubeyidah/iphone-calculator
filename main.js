const clockEl = document.querySelector('.clock');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');
const displayEl = document.querySelector('.display');

const operatorsEl = document.querySelectorAll(".main-operator");
const equalEl = document.querySelector(".calculate");


const decimalEl = document.querySelector('.dot');
const numbersEl = document.querySelectorAll('.number');

let valueInMemory = null;
let opratorInMemory = null;



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

const getValueAsStr = () =>  displayEl.textContent.split(",").join('');
const getValueAsNum = () => parseFloat(getValueAsStr());
const setValueAsStr = (valueStr) => {
  if(valueStr[valueStr.length - 1 ] === '.'){
    displayEl.textContent += "."
    return;
  }
  const [wholeNum, decimalNum] = valueStr.split('.');
  if(decimalNum){
    displayEl.textContent = parseFloat(wholeNum).toLocaleString() + '.' + decimalNum;
  }else {
    displayEl.textContent = parseFloat(wholeNum).toLocaleString();
  }
}
 

const handleNumClick = (numStr) => {
  if(checkMaxLen()){
    const currentDisplayStr = getValueAsStr()
    checkMaxLen();
    if(currentDisplayStr === '0'){
      setValueAsStr(numStr);
    }else{
      setValueAsStr(currentDisplayStr + numStr)
    }
  }
}

const getResultOfOpration = () => {
  const valueNumMemory = parseFloat(valueInMemory);
  const valueAsNum = getValueAsNum();
  let newValue = null;
    if(opratorInMemory === 'division'){
      newValue = valueNumMemory / valueAsNum;
    }else if(opratorInMemory === 'multiplication'){
      newValue = valueNumMemory * valueAsNum;
    }else if(opratorInMemory === 'subtraction'){
      newValue = valueNumMemory - valueAsNum;
    }else if(opratorInMemory ===  'addition'){
      newValue = valueNumMemory + valueAsNum;
    }
  return newValue.toString();
}



const handleOpratorClick = (opration) => {
    checkMaxLen();
    const currentValueAsStr = getValueAsStr();
    if(!valueInMemory){
      valueInMemory = currentValueAsStr;
      opratorInMemory = opration;
      setValueAsStr("0")
      return;
    }
    
    valueInMemory = getResultOfOpration();
    setValueAsStr("0");
    opratorInMemory = opration;
  }

// add eventlistner to all numbers  and decimal
numbersEl.forEach(number => {
  number.addEventListener('click', (e) => {
   handleNumClick(e.target.textContent.toString())
  })
})

decimalEl.addEventListener('click' , () => {
  const currentValueStr = getValueAsStr()
  if(!currentValueStr.includes('.')){
    setValueAsStr(currentValueStr + ".");
  }
})

acEl.addEventListener('click', () => {
  setValueAsStr("0");
  opratorInMemory = null;
  valueInMemory = null;
  checkMaxLen();
})

pmEl.addEventListener('click', () => {
  const currentValueNum = getValueAsNum();
  const currentValueStr = getValueAsStr();
  checkMaxLen();
  if(currentValueNum > 0){
    setValueAsStr('-' + currentValueStr);
  }else if(currentValueNum < 0){
    setValueAsStr((Math.abs(currentValueNum)).toString())
  }
})

percentEl.addEventListener('click', ()=> {
  checkMaxLen();
  const currentValueNum = getValueAsNum()
  const newValueNum = currentValueNum / 100;
  setValueAsStr(newValueNum.toString())
  opratorInMemory = null;
  valueInMemory = null;
})


operatorsEl.forEach(operator => {
  operator.addEventListener('click',(e) => {
    const {value}  = e.target;
    handleOpratorClick(value);
  })
})

equalEl.addEventListener('click' ,() => {
  if(valueInMemory){
   setValueAsStr(getResultOfOpration());
   checkMaxLen();
  }
})

// check max length of numbers display
function checkMaxLen(){
 const value = displayEl.textContent;
 if(value.length > 6){
  displayEl.style.fontSize = '2.8rem'
}else  if(value.length < 6){
  displayEl.style.fontSize = '4rem'
 }

 if(value.length > 10){
  return false;
}else if(value.length < 11){
  return true;
 }
}