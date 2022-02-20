console.log("Javascript - лучший язык программирования!");
window.addEventListener("load", function() {
  setTimeout(() => {
   
    
    let editMessage = document.querySelector("#greeting");
    editMessage.textContent = 'Привет Виталий Валентинович!';

    
    document.querySelector("#essentials").style.backgroundColor = "yellow";
    
    
    let appendChild = document.createElement("img");
    appendChild.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
    document.querySelector("#greeting").appendChild(appendChild);  
    
    
    let uL = document.createElement("ul");
    uL.classList.add ("todo-items");
    document.querySelector("body").appendChild(uL);

    
    let array = ['приготовить кофе','съесть салатик','поменять подгузник ребёнку','поехать на работу'];
    for (let i = 0; i < array.length; i++ ) {
      let lI = document.createElement("li");
      lI.textContent = array[i];
      document.querySelector(".todo-items").appendChild(lI);
    }
   

   
    let prodUl = document.querySelector("ul");
setTimeout(() => {
  let liAll = document.querySelectorAll('li');
  let ulTodo = document.querySelector(".todo-items");
  prodUl.addEventListener("click", selectorProducts, false);
  ulTodo.addEventListener("click", selectorProducts, false);

  function selectorProducts(e) {
    if (e.target != e.currentTarget) {
      for (let i = 0; i < liAll.length; i++) {
        liAll[i].setAttribute('class', '');
      }
      let clicker = e.target;
      clicker.setAttribute('class', 'selected');
    }
    e.stopPropagation();
  }
}, 2400);

let imgProduct = document.querySelector('img');

    
    let ghost = document.querySelector("#ghosting");
    ghost.addEventListener("mouseover",ghosting, false);
    function ghosting() {
      document.querySelector("body").removeChild(ghost);
    }

    
    let width = document.querySelector("#resize");
    width.addEventListener("mouseover",() => {width.style.width = "400px"}, false);
    width.addEventListener("mouseout",() => {width.style.width = "200px"}, false);

   
    let reset = document.querySelector("#reset")
    reset.addEventListener("click",resetChanges, false);
    function resetChanges () {
      let selected = document.querySelectorAll(".selected");
      selected.forEach(sel => sel.classList.remove('selected'))
      let image = document.querySelector('#Spooky');
      image.setAttribute("src", 'images/panic.jpg');
    }
  
    window.addEventListener("keydown", checkKeyPressed, false);
    function checkKeyPressed(e) {
      if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) 
        alert("Я НЕНАВИЖУ ЧИСЛААААА!");    
    }
}, 1500);
})