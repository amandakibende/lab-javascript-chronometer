const chronometer = new Chronometer();


// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');


// I wanted to call the functions inside chronometer in order to return 
//the correct answer when the btn is clicked left or right.


btnLeftElement.onclick = function () {
  if(btnLeftElement.className === 'btn start'){
    return this.chronometer = start();
  }
  if (btnLeftElement.className === 'btn stop'){
    return this.chronometer = stop();
  }
  
} 


btnRightElement.onclick = function () {
  if(btnLeftElement.className === 'btn reset'){
    return this.chronometer = reset ();
  }
  if (btnLeftElement.className === 'btn split'){
    return this.chronometer = split();
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
}

function printSeconds() {
  // ... your code goes here
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
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});


