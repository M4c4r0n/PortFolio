"use strict";

{
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    function getCalenderHead(){
        const dates = [];
        const d = new Date(year,month,0).getDate();
        const n = new Date(year,month,1).getDay();
        for(let i = d-n+1;i <= d;i++){
            dates.push({
                date:i,
                isToday:false,
                isDisabled:true
            });
        }
        return dates;
    }
    function getCalenderBody(){
        const dates = [];
        const lastDate = new Date(year,month+1,0).getDate();
        for(let i = 1;i <= lastDate;i++){
            dates.push({
                date:i,
                isToday:year === today.getFullYear() && month === today.getMonth() && i === today.getDate(),
                isDisabled:false
            });
        }
        return dates;
    }
    function getCalenderTail(){
        const dates = [];
        const lastday = new Date(year,month+1,0).getDay();
        for(let i = 0; i < 6-lastday;i++){
            dates.push({
                date:i+1,
                isToday:false,
                isDisabled:true
            });
        }
        return dates;
    }

    function clearCalender(){
        const tbody = document.querySelector("tbody");
        while(tbody.firstChild){
            tbody.removeChild(tbody.firstChild);    
        }
    }
    function renderTitle(){
        const title =`${year}/${String(month+1).padStart(2,"0")}`;
        document.querySelector("#title").textContent = title; 
    }
    function renderWeeks(){

    }
    function createCalender(){
        clearCalender();
        renderTitle();
        const tbody = document.querySelector("tbody");
        const dates = [
            ...getCalenderHead(),
            ...getCalenderBody(),
            ...getCalenderTail(),
        ];
        const weeks = [];
        const weeksCount = Math.floor(dates.length/7);
        for(let i = 0;i < weeksCount;i++){
            weeks.push(dates.splice(0,7));
        }

        
        weeks.forEach( (week) =>{
            const tr = document.createElement("tr");
            week.forEach((date)=>{
                const td = document.createElement("td");
                td.textContent = date.date;
                if(date.isDisabled)td.classList.add("disabled");
                if(date.isToday)td.classList.add("today");
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });

    }
    createCalender();
    document.querySelector("#prev").addEventListener("click",()=>{
        month--;
        if(month < 0){
            month = 11;
            year--;
        }
        createCalender();
    });
    document.querySelector("#next").addEventListener("click",()=>{
        month++;
        if(month >= 12){
            month = 0;
            year++;
        }
        createCalender();
    });
    document.querySelector("#today").addEventListener("click",()=>{        
        year = today.getFullYear();
        month = today.getMonth();
        createCalender();
    });
}