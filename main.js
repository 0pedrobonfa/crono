let seconds_element = document.getElementById("seconds");
let minutes_element = document.getElementById("minutes");;
let hours_element = document.getElementById("hours");;
let btnPause = document.getElementById('btnPause');
let btnStart = document.getElementById('btnStart');
let btnReset = document.getElementById('btnReset');
let paused = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let counter;
let chronometer = {hours, minutes, seconds}

function incrementSeconds(){

    if(!paused){
        
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
    chronometer = {hours, minutes, seconds}
}
}


btnStart.addEventListener('click', ()=>{
    paused = false;
    clearInterval(counter);
    counter = setInterval(incrementSeconds, 1000)
    
})

btnReset.addEventListener('click',()=>{
    paused = true;
    minutes = 0;
    seconds = 0;
    hours = 0;
    hours_element.innerHTML = '0' + 0
    minutes_element.innerHTML = '0' + 0
    seconds_element.innerHTML = '0' + 0

})

btnPause.addEventListener('click', ()=>{
    console.log(chronometer);
    paused = true
    console.log("Parou!")
    if(seconds<=9){
        seconds_element.innerText = '0' + seconds;

    }else{
        seconds_element.innerText = seconds;
    }
    if(minutes<=9){
        minutes_element.innerText = '0' + minutes;
    }else{
        minutes_element.innerText = minutes;
    }        
    if(hours<=9){
        hours_element.innerText = '0' + hours;
    }else{
        hours_element.innerText = hours;
    }

})


