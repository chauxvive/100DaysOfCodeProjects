alert("js works");

window.setTimeout(function () {

    var todos = [];

    var input = prompt("what would you like to do?")

    while(input != "quit"){
        if (input === 'list') {
           listTodos();
        } else if (input === 'new') {
            addTodo();
        } else if(input === "delete"){
           deleteTodo();
        }
        input = prompt("what would you do?")
    }
    console.log("ok, logging out.");

function listTodos() {
    console.log("********");
    todos.forEach(function (todo, index) {
        console.log((index + 1) + ": " + todo);
    });
    console.log("********");
};

function addTodo(){
 var newTodo = prompt("Enter new todo");
 todos.push(newTodo);
 console.log("Added todo");
};

function deleteTodo(){
 var i = (prompt("which index should be deleted?") - 1);
 todos.splice(i, 1)
 console.log("Deleted todo");
}

}, 500);

