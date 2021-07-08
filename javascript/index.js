const chronometer = new Chronometer();


// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');



btnLeftElement.onclick = function () {

  btnLeftElement.classList.toggle('stop')

  if(btnLeftElement.innerHTML === 'START'){
    setStopBtn();
    printSeconds();
  } else {
    setStartBtn();
  }
  
} 


btnRightElement.onclick = function () {

  btnLeftElement.classList.toggle('split')

  if(btnRightElement.innerHTML === 'RESET')
  {
    setSplitBtn();
  } else {
    setResetBtn();
  }
  

} 


// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here

  //inside the html wanted to return the minute and second functions 
  //previously write.

}

function printMinutes() {
  // ... your code goes here
  return minUniElement.innerHTML.value = chronometer.getminutes();
}

function printSeconds() {
  // ... your code goes here

  return secUniElement.innerHTML.value = chronometer.getSeconds();
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here

  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here

  btnRightElement.innerHTML = 'SPLIT'
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  // ... your code goes here

  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});


