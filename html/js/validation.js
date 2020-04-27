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


// FUNCTIE DIE FILTER DICHTKLAPT EN OPENKLAPT WANNEER JE DRUKT OP ZOEKEN

function verbergFilter() {
  var verberg = document.getElementById("containerfilter");
  if (verberg.style.display === "none") {
    verberg.style.display = "inline-block";
  } else {
    verberg.style.display = "none";
  }
}
