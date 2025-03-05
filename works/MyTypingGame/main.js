"use strict";
{

    const words= [
        "tokyo",
        "kanagawa",
        "chiba",
        "saitama",
        "gunma",
        "tochigi",
        "ibaraki",
    ];
    const target = document.querySelector("#target");
    const result = document.querySelector("#result");
    let loc;
    let word;
    let startTime;
    let isPlaying = false;
    let count = 0;
    function setWord(){
        if(count === 5){
            const d = ((Date.now()-startTime)/1000).toFixed(2);
            result.textContent = `Finished! ${d} sec`;
            target.textContent = "Click to start";
            isPlaying = false;
            count = 0;
            return;
        }
        word = words[Math.floor(Math.random()*words.length)];
        target.textContent=word;
        loc = 0;
    }
    document.addEventListener("click",()=>{
        if(isPlaying)return;
        startTime = Date.now();
        isPlaying = true;
        result.textContent="";
        setWord();
    });
    
    document.addEventListener("keydown",(e)=>{
        if(e.key === word[loc]){
            loc++;
            target.textContent = "_".repeat(loc)+word.substring(loc);
            if(loc === word.length){
                count++;
                setWord();
            }
        }
    });
}