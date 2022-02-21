console.log("Javascript - лучший язык программирования!");
window.addEventListener("load", function() {
  setTimeout(() => {
   
    // #1 I changed content greeting on "Привет Виталий Валентинович"
    let editMessage = document.querySelector("#greeting");
    editMessage.textContent = 'Привет Виталий Валентинович!';

    // #2 I set background color for <li> on "yellow"
    document.querySelector("#essentials").style.backgroundColor = "yellow";
    
    // #3 I created image's tag , Seted its attribute ,and enclosed it in a div with the id #greeting.
    let appendChild = document.createElement("img");
    appendChild.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
    document.querySelector("#greeting").appendChild(appendChild);  
    
    //#4  I created and added an ul element to the end of the body with the "todo-items" class
    let uL = document.createElement("ul");
    uL.classList.add ("todo-items");
    document.querySelector("body").appendChild(uL);

    //#5  I went through the array ['make coffee','eat salad','change baby's diaper','go to work'] and created a li tag for each element, for example: <li>make coffee</li>
    // #6 Add each previously created li tag to your ul construct with the "todo-items" class.
    let array = ['приготовить кофе','съесть салатик','поменять подгузник ребёнку','поехать на работу'];
    for (let i = 0; i < array.length; i++ ) {
      let lI = document.createElement("li");
      lI.textContent = array[i];
      document.querySelector(".todo-items").appendChild(lI);
    }
   

   //#7  I Added the selected class to <li> when anything click on it. Removed it from any other li.
  //#8 Changed the image so that it is the last selected food item.
   let Ul = document.querySelector("#spoky");
    Ul.addEventListener("click",addClass, false);
    function addClass(Class) {
      const knots = Class.target.parentNode.childNodes;
      knots.forEach(knot => {
        if (knot.nodeName === 'LI') {
          knot.classList.remove('selected')
        }
      });
     Class.target.classList.add('selected');
     const key = Class.target.innerText;
      let obj = {
        "мёд": "images/honey.jpg",
        "молоко": "images/milk.jpg",
        "вода": "images/water.jpg",
        "вино": "images/wine.jpg",
        "пиво": "images/beer.jpg"
      }
      let picture = document.querySelector('#spooky');
      picture.setAttribute("src", obj[key]);
    }




     // #9 When the mouse pointer hovers over the gray div, it is removed from the DOM.
    let ghost = document.querySelector("#ghosting");
    ghost.addEventListener("mouseover",ghosting, false);
    function ghosting() {
      document.querySelector("body").removeChild(ghost);
    }

    // #10 When the mouse pointer hovers over the orange div, its width doubles. When we go beyond the div, the width returns to its original size
    let width = document.querySelector("#resize");
    width.addEventListener("mouseover",() => {width.style.width = "400px"}, false);
    width.addEventListener("mouseout",() => {width.style.width = "200px"}, false);

   // #11 When the Reset button is pressed, delete the selected class from each <li> and change the image to panic.jpg .
    let reset = document.querySelector("#reset")
    reset.addEventListener("click",resetChanges, false);
    function resetChanges () {
      let selected = document.querySelectorAll(".selected");
      selected.forEach(sel => sel.classList.remove('selected'))
      let image = document.querySelector('#Spooky');
      image.setAttribute("src", 'images/panic.jpg');
    }
   // #12 When the key is pressed 1, 2, 3, 4, 5, 6, 7, 8, 9 or 0 the message "I HATE NUMBERS AAAAA!" appears on the page.
    window.addEventListener("keydown", checkKeyPressed, false);
    function checkKeyPressed(e) {
      if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) 
        alert("Я НЕНАВИЖУ ЧИСЛААААА!");    
    }
}, 1500);
})