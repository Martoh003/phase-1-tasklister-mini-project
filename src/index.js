document.addEventListener("DOMContentLoaded", () => {
    // your code here
  const formSubmit =(e) => {
    e.preventDefault();
     //let text = document.querySelectorAll("input")
     let text = document.getElementById("new-task-description").value;

     console.log(text);
     listBuild(text);
     form.reset();     
}
   const form = document.querySelectorAll("#create-task-form")
   form.addEventListener('submit', formSubmit)
}); 

function listBuild(text){

  let ul = document.querySelector("#tasks");
  let li = document.createElement("li");
  let btn = document.createElement("button")
  btn.addEventListener('click',deleteTask)
  btn.textcontent = " x"
  li.innerText = '$(text)';
  li.appendChild(btn);
  li.innerText = text;
  ul.appendChild(li);




}
function deleteTask(e){
  e.target.parentNode.remove();
}
