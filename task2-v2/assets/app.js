let imgArr = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
];

let randImgBtn = document.querySelector(".random");
let autoImgBtn = document.querySelector(".auto");
let prevImgBtn = document.querySelector(".prev");
let nextImgBtn = document.querySelector(".next");
let stopImgBtn = document.querySelector(".stop");
// ///////////
let apiTitle = document.querySelector(".img-slider-h3-title");
let apiPost = document.querySelector(".img-slider-p");
let apispanNum = document.querySelector(".apiContent span");
// //////////// start task week 3 ---------

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    console.log("the res is : " + res);
    return res.json();
  })
  .then((data) => {
    console.log("the data is : " + data);
    data.forEach((el) => {
      console.log("the el is : " + el);
      apispanNum.textContent = `${el.id}`;
      apiTitle.textContent = `${"Tilte is : " + el.title}`;
      apiPost.textContent = `${"The Post is : " + el.body}`;
    });
  })
  .catch((error) => console.log("error is : " + error));

// //////////// end task week 3 ---------

let autoPlay;

let imageBox = document.querySelector(".img-slider-img");

function getRandomImg() {
  function randomImg() {
    let randImg = Math.floor(Math.random() * imgArr.length + 1);
    console.log(randImg);
    imageBox.src = `./assets/imgs/${randImg}.png`;
  }

  autoPlay = setInterval(randomImg, 900);
}

let currentImg = 0;

function autoDisplayImg() {
  autoPlay = setInterval(() => {
    if (currentImg >= imgArr.length - 1) {
      currentImg = -1;
    }
    currentImg++;
    return setImgUI();
  }, 1000);
}

function stopAutoPlayImg() {
  clearInterval(autoPlay);
}

function setImgUI() {
  return (imageBox.src = `./assets/imgs/${imgArr[currentImg]}`);
}

function nextImgSelct() {
  if (currentImg >= imgArr.length - 1) {
    currentImg = -1;
  }
  currentImg++;
  return setImgUI();
}

function prevImgSelct() {
  if (currentImg <= 0) {
    currentImg = imgArr.length;
  }
  currentImg--;
  return setImgUI();
}

randImgBtn.addEventListener("click", getRandomImg);
autoImgBtn.addEventListener("click", autoDisplayImg);
stopImgBtn.addEventListener("click", stopAutoPlayImg);
nextImgBtn.addEventListener("click", nextImgSelct);
prevImgBtn.addEventListener("click", prevImgSelct);
