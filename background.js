const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImage(imgNumber) {
  const image = new Image();
  body.appendChild(image);
  image.src = `background/${imgNumber}.jpg`;
  image.classList.add("bgImage");
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function genRandom() {
  const number = getRandomIntInclusive(1, IMG_NUMBER);
  console.log(number);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
