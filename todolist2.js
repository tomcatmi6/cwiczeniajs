var toDoList = []
function toDo() {
    var x = prompt("Choose your option:");
    if(x==="new") {
        newTodo();
      }
    else if(x==="delete") {
       delTodo();
    }
    else if(x==="list") {
        listTodo();
    }
    else if(x==="quit") {
        quitTodo();
    }
};
function newTodo(){
    toDoList.push(prompt("Type what you have to memorize:"));
      console.log(toDoList + " added to list");
      toDo();
};
function delTodo(){
     var num = prompt("Ktory numer listy chcesz usunac?");
        toDoList.splice(num, 1);
        console.log("usunieto wpis numer " + num);
        toDo();
};
function listTodo() {
    console.log("****************");
        toDoList.forEach(function(toDoList, i){
            
            console.log(i + ":" + toDoList);
            
        });
        console.log("****************");
        toDo();
        
};
function quitTodo() {
    console.log(alert("OK quitted."));
};
toDo();