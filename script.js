setInterval(setClock, 1000);

const hourhand = document.querySelector('[data-hour-hand]');
const minutehand = document.querySelector('[data-minute-hand]');
const secondhand = document.querySelector('[data-second-hand]');

function setClock() {
  console.log("Entered setClock")
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondhand, secondsRatio);
  setRotation(minutehand, minutesRatio);
  setRotation(hourhand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  console.log("Entering setRotation")
  element.style.setProperty('--rotation', `${rotationRatio * 360}deg`);
 }
 
 console.log(hourhand)
 console.log(minutehand)
 console.log(secondhand)
 console.log(setClock) 
 console.log(setRotation)
 console.log(setInterval)