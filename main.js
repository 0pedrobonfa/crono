let seconds_element = document.getElementById("seconds");
let minutes_element = document.getElementById("minutes");;
let hours_element = document.getElementById("hours");;


function incrementSeconds(){
    seconds+= 1;
    seconds_element.innerText = seconds;
    console.log(seconds);

    if(seconds>=60){
        seconds = 0;
        minutes++;
        minutes_element.innerText = minutes;
    }else if(minutes>=60){
        minutes = 0;
        hours++;
        hours_element.innerText = hours;

    }
}

let seconds = 0;
let minutes = 0;
let hours = 0;

let conter =  setInterval(incrementSeconds, 1000);

