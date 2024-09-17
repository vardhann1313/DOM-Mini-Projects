const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Adding task ------------------------------------
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something !")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        inputBox.value = '';

        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveTask();
    }
}

// checking, unchecking or deleting task ---------
listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveTask();
}, false)


// Saving task in browser local storage -------------
function saveTask(){
    localStorage.setItem("Tasks", listContainer.innerHTML);
}
// Showing saved task in browser local storage ------
function showTask(){
    listContainer.innerHTML = localStorage.getItem("Tasks");
}
showTask();