let task = document.getElementById("task")

function addTask() {
    
    let inputText = task.value;
    
    

    let taskItem = document.createElement("li")

taskItem.innerHTML=inputText

todayList.appendChild(taskItem)
    console.log(taskItem);
}


todayBtn.addEventListener("click", addTask)
//////////----------------------------------//////////////