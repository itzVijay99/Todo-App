let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let li=document.createElement("li");
    if(inp.value!=''){

        li.innerText=inp.value;
    let delBtn=document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.innerText="delete";
    

    li.appendChild(delBtn);
    let div=document.createElement("div");
    div.style.backgroundColor="rgb(50, 50, 105)";
    div.style.margin="10px";
    div.classList.add("car");

    div.appendChild(li);
    ul.appendChild(div);
    inp.value='';

    }
    



});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let del=event.target.parentElement;
        let par=del.parentElement;
        par.remove();
    }
    
})