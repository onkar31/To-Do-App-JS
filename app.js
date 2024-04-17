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
    }

    req = prompt("Please enter your request");
}