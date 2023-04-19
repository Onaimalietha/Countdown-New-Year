const newYears = "1 Jan 2024";

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


function countdown(){
    const finalDate = new Date(newYears);
    const currDate = new Date();
    //console.log(currDate);

    const seconds = (finalDate - currDate) / 1000;
    const minutes = Math.floor(seconds / 60) ;
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const rHours = hours - days*24;
    const rMinutes = minutes - hours*60;
    const rSeconds = Math.floor(seconds - minutes*60);

    console.log(rSeconds, rMinutes, rHours, days);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = rHours;
    minutesEl.innerHTML = rMinutes;
    secondsEl.innerHTML = rSeconds;
}

countdown();
setInterval (countdown, 1000);

