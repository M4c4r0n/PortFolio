"use strict";
{
    const inputLink = document.querySelector(".inputLink");
    const inputTitle = document.querySelector(".inputTitle");
    const inputExplanation = document.querySelector(".inputExplanation");
    const button = document.querySelector(".btn");
    
    button.addEventListener("click",()=>{
        console.log(inputLink.value);
        if(inputLink.value === "" || inputTitle.value === "" || inputExplanation.value === "")return;
        const li = document.createElement("li");
        li.classList.add("work");
        const a = document.createElement("a");
        a.href = inputLink.value;
        a.target = "_blank";
        const img = document.createElement("img");
        img.src = "images/omikuji.png";
        img.alt = "作品の画像";
        img.width = "128";
        img.height =  "128";
        const h3 = document.createElement("h3");
        h3.textContent = inputTitle.value;
        const p = document.createElement("p");
        p.textContent = inputExplanation.value;
        a.appendChild(img);
        a.appendChild(h3);
        a.appendChild(p);

        li.appendChild(a);
        console.log(li);
        document.querySelector("ul").appendChild(li);
    });

}