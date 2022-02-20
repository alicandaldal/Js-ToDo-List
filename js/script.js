const input = document.querySelector("#task");
const btnAddTask = document.querySelector("#liveToastBtn");
const taskList = document.querySelector("#list");
const liveAddToast = document.querySelector("#liveAddToast");
const liveNullToast = document.querySelector("#liveNullToast");
const btnDelete = document.querySelector(".close");


eventListeners();

function eventListeners(){
    btnAddTask.addEventListener("click",addTask);
    taskList.addEventListener("click", deleteTask);
    taskList.addEventListener("click", checkedTask);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
} 

function loadAllTodosToUI(){
    let todos = getTodoLS();
    
    todos.forEach(function(todo) {
        createTask(todo);
    });
}

function addTask(e){
    if(input.value.trim() ===""){

        let nullToast = new  bootstrap.Toast(liveNullToast);
        nullToast.show();
    }
    else{
        const newTask = input.value.trim();

        let addToast = new  bootstrap.Toast(liveAddToast);
        addToast.show();
        createTask(newTask);
        addTodoLS(newTask);
    }

    e.preventDefault();
}

function createTask(newTask){
    const li = document.createElement("li");
    const btnDelete = document.createElement("span");
    btnDelete.className="close";
    taskList.appendChild(li);
    li.appendChild(document.createTextNode(newTask));
    li.appendChild(btnDelete);
    btnDelete.appendChild(document.createTextNode("X"))
    

    input.value="";
}

function deleteTask(e){
    if(e.target.className==="close"){
       e.target.parentElement.remove() ;
    
    }
    
}

function checkedTask(e){
    if(e.target.className == false){
        e.target.className="checked";
    }
    else if(e.target.className = "checked"){
        e.target.className ="";
    }
}

function getTodoLS(){
    let todos;
        if (localStorage.getItem("todos") === null) {
            todos=[];

        }
        else{
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        return todos;
}

function addTodoLS(newTask){
    
    let todos = getTodoLS();
    todos.push(newTask);
    localStorage.setItem("todos", JSON.stringify(todos));
}


