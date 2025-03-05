"use strict";

const btn=document.querySelector("#btn");
const result = document.querySelector("#result");
btn.addEventListener("click",()=>{
    const results = ["大吉","中吉","凶"];
    const hoge = Math.floor(Math.random()*3);
    result.textContent = results[hoge];
});