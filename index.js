let button = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("#input1");

button.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText = input.value;

    let dbutton = document.createElement("button");
    dbutton.innerText = "Delete"
    dbutton.classList.add("Delete")

    ul.appendChild(li);
    li.appendChild(dbutton);
    input.value = "";

    // dbutton.addEventListener("click",function(){
    //     li.remove();
    // });
});

ul.addEventListener("click",function(event){
    let item = event.target.parentElement;
        item.remove();
})