const inputBox = document.querySelector(".inputField input");
const addbutton = document.querySelector(".inputField button");
const todoList = document.querySelector(".todolist");
const deleteAllBtn = document.querySelector(".footer button");
inputBox.onkeyup = ()=>{
    let userData = inputBox.value; 
    if(userData.trim() != 0){ 
      addbutton.classList.add("active"); 
    }else{
      addbutton.classList.remove("active"); 
    }
  }
  showTasks();
  addbutton.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorageData = localStorage.getItem("New ToDo");
    if(getLocalStorageData === null){
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorageData);
    }
    listArr.push(userData);
    localStorage.setItem("New ToDo", JSON.stringify(listArr));
    showTasks();
    addbutton.classList("active")
}

function showTasks() {
    let getLocalStorageData = localStorage.getItem("New ToDo");
    if(getLocalStorageData === null){
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorageData);
    }
    const pendingNum = document.querySelector(".pending");
    pendingNum.textContent = listArr.length;
    let newLiTag = "";
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span> </li>`;
});
todoList.innerHTML = newLiTag; 
inputBox.value = ""
}
function deleteTask(index) {
    let getLocalStorageData = localStorage.getItem("New ToDo");
    listArr = JSON.parse(getLocalStorageData);
    listArr.splice(index, 1);
    localStorage.setItem("New ToDo", JSON.stringify(listArr));
    showTasks();   
}
deleteAllBtn.onclick = ()=>{
    listArr = []; 
    localStorage.setItem("New ToDo", JSON.stringify(listArr)); //set the item in localstorage
    showTasks(); 
  }