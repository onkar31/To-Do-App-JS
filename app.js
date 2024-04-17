let todo = [];

let req = prompt("Please enter your request");

while(true){
    if(req == "quit"){
        console.log("Quitting app!");
        break;
    }

    if(req == "list"){
        console.log("--------------------");
        for(let i = 0 ; i < todo.length; i++){
            console.log(i+1, todo[i]);
        }
        console.log("--------------------");
    }else if(req == "add"){
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task added successfully.");
    }else if(req == "delete"){
        let idx = parseInt(prompt("Please enter the task index"));
        if( idx >= 0 && idx <= todo.length){
            todo.splice(idx-1, 1);
            console.log("Task Deleted Successfully!")
        }else
        console.log("Invalid index entered!")   
    }

    req = prompt("Please enter your request");
}