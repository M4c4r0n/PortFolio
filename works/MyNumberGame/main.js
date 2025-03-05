"use strict";
{
    class Panel{
        constructor(game){
            this.game = game;
            this.el = document.createElement("li");
            this.el.classList.add("pressed");
            this.el.addEventListener("click",()=>{
                this.check();
            });
        }
        getEl(){
            return this.el;
        }
        activate(num){
            this.el.classList.remove("pressed");
            this.el.textContent=num;
        }
        check(){
            if(this.game.getCurrentNum() === parseInt(this.el.textContent)){
                this.el.classList.add("pressed");
                this.game.addCurrentNum();
                if(this.game.getCurrentNum() === this.game.getLevel()*this.game.getLevel()){
                    clearTimeout(this.game.getTimeoutId());
                }
            }
        }
    }
    class Board{
        constructor(game){
            this.game = game;
            this.panels = [];
            for(let i = 0;i < this.game.getLevel()*this.game.getLevel();i++){
                this.panels.push(new Panel(this.game));
            }
            this.setup();
        }
        setup(){
            const board = document.querySelector("#board");
            this.panels.forEach(panel=>{
                board.appendChild(panel.getEl());
            });
        }
        activate(){
            const numbers = [];
            for(let i = 0;i < (this.game.getLevel()*this.game.getLevel());i++)numbers.push(i);
            this.panels.forEach(panel=>{
                panel.activate(numbers.splice(Math.floor(Math.random()*numbers.length),1)[0]);
            });
        }
    }
    
    class Game{
        constructor(level){
            this.level = level;
            this.board= new Board(this);
            this.currentNum = undefined;
            this.startTime = undefined;
            this.timeoutId = undefined;
            const btn = document.querySelector("#btn");
            btn.addEventListener("click",()=>{
                this.start();
            });
            this.setup();
        }
        setup(){
            const container = document.querySelector("#container");
            container.style.width = 50 * this.level + 10 * 2 + "px";
        }
        start(){
            if(typeof this.timeoutId !== "undefined"){
                clearTimeout(this.timeoutId);
            }
            this.currentNum = 0;
            this.board.activate();
            this.startTime = Date.now();
            this.runTimer();
        }
        runTimer(){
            const timer = document.querySelector("#timer");
            timer.textContent = ((Date.now()-this.startTime)/1000).toFixed(2);
            this.timeoutId = setTimeout(()=>{
                this.runTimer();
            },10);
        }
        getCurrentNum(){
            return this.currentNum;
        }
        getTimeoutId(){
            return this.timeoutId;
        }
        addCurrentNum(){
            this.currentNum++;
        }
        getLevel(){
            return this.level;
        }
    }
    new Game(4);
}