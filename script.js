// ======================
// DIGITAL CLOCK
// ======================


const clock = document.getElementById("clock");
const date = document.getElementById("date");


function updateClock(){

    const now = new Date();


    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");


    clock.innerHTML = 
    `${hours}:${minutes}:${seconds}`;



    date.innerHTML = now.toDateString();

}


setInterval(updateClock,1000);

updateClock();




// ======================
// STOPWATCH
// ======================


const stopwatch = document.getElementById("stopwatch");


const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");


let seconds = 0;
let minutes = 0;
let hours = 0;


let timer = null;



function updateStopwatch(){

    seconds++;


    if(seconds === 60){

        seconds = 0;
        minutes++;

    }


    if(minutes === 60){

        minutes = 0;
        hours++;

    }


    let h = String(hours).padStart(2,"0");
    let m = String(minutes).padStart(2,"0");
    let s = String(seconds).padStart(2,"0");


    stopwatch.innerHTML =
    `${h}:${m}:${s}`;

}



startBtn.addEventListener("click",()=>{


    if(timer !== null){
        return;
    }


    timer = setInterval(updateStopwatch,1000);


});



pauseBtn.addEventListener("click",()=>{


    clearInterval(timer);

    timer = null;


});



resetBtn.addEventListener("click",()=>{


    clearInterval(timer);


    timer = null;


    seconds = 0;
    minutes = 0;
    hours = 0;


    stopwatch.innerHTML="00:00:00";


});