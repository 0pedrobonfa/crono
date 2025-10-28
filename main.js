let seconds_element = document.getElementById("seconds");
let minutes_element = document.getElementById("minutes");;
let hours_element = document.getElementById("hours");;


function incrementSeconds(){
    seconds+= 1;
    if(seconds<=9){
        seconds_element.innerText = '0' + seconds;

    }else{
        seconds_element.innerText = seconds;
    }
    console.log(seconds);

    if(seconds>59){
        seconds = 0;
        minutes++;
        minutes_element.innerText = minutes;
        if(minutes<=9){
            minutes_element.innerText = '0' + minutes;
        }else{
            minutes_element.innerText = minutes;
        }
    }else if(minutes>59){
        minutes = 0;
        hours++

        if(hours<=9){
            hours_element.innerText = '0' + hours;
        }else{
            hours_element.innerText = hours;
        }

    }
}

let seconds = 0;
let minutes = 0;
let hours = 0;

let conter =  setInterval(incrementSeconds, 1000);

