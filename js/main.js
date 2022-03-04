var elForm = document.querySelector(".site__form");
var elInput = document.querySelector(".site__input");
var elList = document.querySelector(".site__list");
var todos = [];


elForm.addEventListener("submit" , function(evt){

  evt.preventDefault();

  var elInputValue = elInput.value.trim();

  var todo = {
    id: todos.length + 1,
    title: elInputValue,
  };

  todos.push(todo);

  elList.innerHTML = "";

  for(var item of todos){

    var newList = document.createElement("li");
    newList.textContent = item.id + "." + item.title;
    elList.appendChild(newList);




  }

  elInput.value = "";



})
