"use strict";

{
    const timer = document.querySelector("#timer");
    const start = document.querySelector("#start");
    const stop = document.querySelector("#stop");
    const reset = document.querySelector("#reset");
    let startTime;
    let timerId;
    let elapsedTime = 0;
    function countUp(){
        const d = new Date(Date.now()-startTime+elapsedTime);
        const m = d.getMinutes();
        const s = d.getSeconds();
        const ms = d.getMilliseconds();
        timer.textContent = `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}.${String(ms).padStart(3,"0")}`;
        timerId = setTimeout(()=>{
            countUp();
        },10);
    }
    setButtonStateInitial();
    function setButtonStateInitial(){
        start.classList.remove("inactive");
        stop.classList.add("inactive");
        reset.classList.add("inactive");

    }
    function setButtonStateRunning(){
        start.classList.add("inactive");
        stop.classList.remove("inactive");
        reset.classList.add("inactive");
    }
    function setButtonStateStopped(){
        start.classList.remove("inactive");
        stop.classList.add("inactive");
        reset.classList.remove("inactive");
    }
    start.addEventListener("click",()=>{
        if(start.classList.contains("inactive"))return;
        setButtonStateRunning();
        startTime = Date.now();
        countUp();
    });
    stop.addEventListener("click",()=>{
        if(stop.classList.contains("inactive"))return;
        setButtonStateStopped();
        clearTimeout(timerId);
        elapsedTime += Date.now() - startTime;                               
    });
    reset.addEventListener("click",()=>{
        if(reset.classList.contains("inactive"))return;
        setButtonStateInitial();
        clearTimeout(timerId);
        timer.textContent="00:00.000";
        elapsedTime=0;
    });
}