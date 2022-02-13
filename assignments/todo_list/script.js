

var input =document.querySelector("input");
var button=document.querySelector("button");
var todosDiv=document.querySelector("div.todos");
var todos = [];

var count = 0;
button.addEventListener("click",function() {
    console.log(input.alue);

    if(input.value){
        var newTodo = document.createElement('p');
        newTodo.innerHTML=input.value;
        newTodo.setAttribute('key',count++);

        todosDiv.appendChild(newTodo);

        newTodo.addEventListener("click",function(e){
            todosDiv.removeChild(e.target);
        })
        input.value="";
    }
    
})