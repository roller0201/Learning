function addTask() {
  let task = document.getElementById("task").value;
  if (!task)
  return;
  const text = "<li>" + task + '</li>' 
  document.getElementById("list").insertAdjacentHTML("beforeend", text);
  document.getElementById("task").value = " "
  document.getElementById("list").addEventListener("click", function(event){
    console.log(event);
    console.log(event.target);
    const element = event.target;
    element.classList.toggle("done");

  })


  
  
}


document.getElementById("add").addEventListener("click", addTask);

