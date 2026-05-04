function displayTime(){
const now = new Date();

let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

if(hour < 10){
    hour = "0" + hour;
}

if(minute < 10){
    minute = "0" + minute;
}

if(second < 10){
    second = "0" + second;
}

const currentTime = hour + ":" + minute + ":" + second;

document.getElementById("clock").textContent = currentTime;
}

displayTime();
setInterval(displayTime,1000);