const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');



const christmasDay = '25 Dec 2021';

function countdown(){
    const christmasDate = new Date(christmasDay);
    const currentDate = new Date();

    const totalSeconds = (christmasDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24 );
    //math.floor rounds numbers down.

    const hours = Math.floor(totalSeconds / 3600) % 24;

    const minutes = Math.floor(totalSeconds / 60) % 60;

    const seconds = Math.floor(totalSeconds) % 60;



    console.log(days, hours, minutes, seconds); // time in milliseconds


    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}



function formatTime(time){
    return time < 10 ? (`0${time}`) : time; //if less than 10 seconds remaining will show zero infront
}

// first call
countdown();


setInterval(countdown, 1000); // recall every 1000 milliseconds

