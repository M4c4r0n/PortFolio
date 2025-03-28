"use strict";
{
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox =>{
        console.log(checkbox);
        checkbox.addEventListener("change",()=>{
            checkbox.parentNode.submit();
        });
    });

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(btn=>{
        btn.addEventListener("click",()=>{
            if(!confirm("Sure?"))return;
            btn.parentNode.submit();
        });
    });
}