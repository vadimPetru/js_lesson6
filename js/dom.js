console.log("Javascript - лучший язык программирования!");
window.addEventListener("DOMContentLoaded", function () {
  
  //1. Поменяйте приветствие с "Привет Всем!" на "Привет Виталий Валентинович!".
  setTimeout(() => {
    let privet = document.querySelector("#greeting");
    privet.textContent = 'Привет Виталий Валентинович!';
  }, 2000);

//2. Установите фоновый цвет для каждого `<li>` на `yellow`.
  setTimeout(() => {
    document.querySelector("#essentials").style.backgroundColor = "yellow";
  }, 2200);

//3. Создайте тег изображения, установите его атрибут `src` на`http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`, и вложите в div с идентификатором `#greeting`.
  setTimeout(() => {
    let pictureNew = document.createElement("img");
    pictureNew.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
    document.querySelector('#greeting').appendChild(pictureNew);
  }, 2400);

//4. Создайте и добавьте ul элемент в конец  body с классом "todo-items"
  setTimeout(() => {
    let ulNew = document.createElement("ul");
    ulNew.classList.add("todo-items");
    document.querySelector("body").appendChild(ulNew);
  }, 2600);
  
//5. Пройдитесь по массиву `['приготовить кофе','съесть салатик','поменять подгузник ребёнку','поехать на работу']` и создайте тег li для каждого элемента, например: `<li>приготовить кофе</li>`
    let arrayNew = [];
  setTimeout(() => {
    let list = ['приготовить кофе', 'съесть салатик', 'поменять подгузник ребёнку', 'поехать на работу'];
    for (let i = 0; i < list.length; i++) {
      let liNew = document.createElement('li');
      liNew.textContent = list[i];
      arrayNew[i] = liNew;
    }
  }, 2600);

//6. Добавьте каждый созданный ранее тег li в вашу конструкцию ul с классом "todo-items".
  setTimeout(() => {
    let perenos = document.querySelector(".todo-items");
    for (let i = 0; i < arrayNew.length; i++) {
      perenos.appendChild(arrayNew[i]);
    }
  }, 2600);

 // 7. Добавьте класс `selected` к `<li>` при щелчке по нём.Удалите его из любых других`li`.
  setTimeout(() => {
    let classNew = document.querySelector("#essentials")
    classNew.addEventListener("click", function (e) {
    let selectedNew = document.querySelectorAll('.selected')
    let object = e.target
    Array.from(selectedNew).forEach(selectedNew => {
      selectedNew.classList.remove('selected')
    });

    object.classList.add('selected')
    let imagesNew =
    {
      "молоко": "images/milk.jpg",
      "мёд": "images/honey.jpg",
      "вода": "images/water.jpg",
      "вино": "images/wine.jpg",
      "пиво": "images/beer.jpg",
    }
    let  title = object.innerText;
    let images = document.querySelector("#logo");
    images.setAttribute('src', imagesNew[title]);
  });
  }, 2800);

 // 8. Измените изображение, чтобы оно было последним выбранным продуктом питания.
  setTimeout(() => {
     let change = document.querySelector(".todo-items")
     change.addEventListener("click", function (e) {
       let changeNew = document.querySelectorAll('.selected')
       let objectNew = e.target
       Array.from(changeNew).forEach(selectedTo => {
         changeNew.classList.remove('selected')
        });
        objectNew.classList.add('selected')
      });
    }, 2800);

//9. Когда на серый div наводится указатель мыши, он удаляется из DOM. 
  setTimeout(() => {
    let deleteNow  = document.querySelector('#ghosting');
    deleteNow.addEventListener("mouseover", removal, false);

    function removal(e) {
      deleteNow.remove();
    }
  }, 3000);

//10. Когда на оранжевый div наводится указатель мыши, его ширина удваивается. Когда мы уходим за пределы div, ширина возвращается к своему первоначальному размеру.
  setTimeout(() => {
    let increase = document.querySelector("#resize");
    let size = increase.clientWidth;

    increase.addEventListener("mouseover", () =>{
      increase.style.width = size * 2 + "px"}, false);

      increase.addEventListener("mouseout", () =>{ 
        increase.style.width = size + "px" }, false);
  }, 3000);

//11. Когда  кнопка Reset нажата - удалите класс `selected` из каждого `<li>` и измените изображение на `panic.jpg`.
  setTimeout(() => {
    let reset = document.querySelector("#reset")
    reset.addEventListener("click", delNew, false);
    function delNew() {
      let changeNow = document.querySelectorAll(".selected");
      changeNow.forEach(del => del.classList.remove("selected"))
      let picture = document.querySelector("#logo");
      picture.setAttribute("src", "images/panic.jpg");
  }
  }, 3000);

  //12. При нажатии клавиши 1, 2, 3, 4, 5, 6, 7, 8, 9 или 0 на странице появляется сообщение «Я НЕНАВИЖУ ЧИСЛААААА!»
  setTimeout(() => {
    window.addEventListener("keypress", nomderNot, false);
    function nomderNot (e) {
      if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
        alert("«Я НЕНАВИЖУ ЧИСЛАААААА!»");
      }
    }
  }, 3000);

})
