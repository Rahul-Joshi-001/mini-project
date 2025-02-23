let game=[];
let user=[];
let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let highest = document.querySelector("#highest");


document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levels();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
 let max=0
 max = level;

function levels(){
    user = [];
    level++;
    max = Math.max(max,level);
    highest.innerHTML = `highest score is ${max-1}`;
    h2.innerText = `level ${level}`;
    let no = Math.floor(Math.random() * 3);
    let random_color = btns[no];
    let random_button = document.querySelector(`.${random_color}`);
    game.push(random_color);

    gameflash(random_button);
}
    function check(idx){
        if(user[idx] ===  game[idx]){
            if(user.length === game.length ){
                setTimeout(levels,1000);
            }
        }else{
            h2.innerHTML = `game over! Your score was ${level}.! <br>press any key to start   `;
            document.querySelector("body").style.backgroundColor = "red"; 
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor = "white";  
            },150);
            reset();
        }
    }

function btnpress(){
    let btn = this;
    console.log(this);
    userflash(btn);
    
    let usercolor = btn.getAttribute("id");
    user.push(usercolor);

    check(user.length-1);

}

let allbtns =document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    game=[];
    user = [];
    level = 0;
}