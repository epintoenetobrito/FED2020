// FUNCTIE DIE LEEG HART VULT EN ANDERSOM

function changeImage() {
  var image = document.getElementById('hart');
  if (image.src.match("icon-like-leeg")) {
    image.src = "img/icon-like-filled.png";
  } else {
    image.src = "img/icon-like-leeg.png";
  }
}

function changeImage2() {
  var image = document.getElementById('hartTwee');
  if (image.src.match("icon-like-leeg")) {
    image.src = "img/icon-like-filled.png";
  } else {
    image.src = "img/icon-like-leeg.png";
  }
}

function changeImage3() {s
  var image = document.getElementById('hartDrie');
  if (image.src.match("icon-like-leeg")) {
    image.src = "img/icon-like-filled.png";
  } else {
    image.src = "img/icon-like-leeg.png";
  }
}

function changeImage4() {
  var image = document.getElementById('hartVier');
  if (image.src.match("icon-like-leeg")) {
    image.src = "img/icon-like-filled.png";
  } else {
    image.src = "img/icon-like-leeg.png";
  }
}


function changeImage5() {
  var image = document.getElementById('hartVijf');
  if (image.src.match("icon-like-leeg")) {
    image.src = "img/icon-like-filled.png";
  } else {
    image.src = "img/icon-like-leeg.png";
  }
}


function changeImage6() {
  var image = document.getElementById('hartZes');
  if (image.src.match("icon-like-leeg")) {
    image.src = "img/icon-like-filled.png";
  } else {
    image.src = "img/icon-like-leeg.png";
  }
}


// FUNCTIE DIE ERVOOR ZORGT DAT MENU DICHTKLAPT ALS JE OP ZOEKEN DRUKT.

var knop = document.querySelector(".knop");
var element = document.querySelector("#containerfilter");

knop.addEventListener("click", function(){
element.classList.toggle("dicht");});



console.log(element);
console.log(knop);



