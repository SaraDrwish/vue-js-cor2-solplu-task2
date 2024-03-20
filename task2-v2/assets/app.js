let randImgBtn = document.querySelector(".random");
let autoImgBtn = document.querySelector(".auto");
let prevImgBtn = document.querySelector(".prev");
let nextImgBtn = document.querySelector(".next");
let stopImgBtn = document.querySelector(".stop");

let apiTitle = document.querySelector(".img-slider-h3-title");
let apiPost = document.querySelector(".img-slider-p");
let apispanNum = document.querySelector(".apiContent span");
let apiContent = document.querySelector(".apiContent");

// //////////// start task week 3 ---------
let apiData;
let apiCount = 0;

let handlResponsFetch = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log("the res is : " + res);
      return res.json();
    })
    .then((data) => {
      console.log("data is : (array) ");
      console.log(data);
      apiData = data.forEach((el) => {
        apiTitle = `<span>${el.id}</span>`;
        let apih3 = `<h3>${el.title}</h3>`;
        let apiP = `<p>${el.body}</p>`;

        let apiSpanElm = document
          .querySelector(".apiContent")
          .insertAdjacentHTML("beforeend", apiP);
        let apih3Elm = document
          .querySelector(".apiContent")
          .insertAdjacentHTML("beforeend", apih3);

        let apiTitleElm = document
          .querySelector(".apiContent")
          .insertAdjacentHTML("beforeend", apiTitle);

        console.log(el);
        console.log(el.body + "   --  " + el.id + "   --  " + el.title);
        // ////////////

        // ///////////
      });
    })
    .catch((error) => console.log("error is : " + error));
};

handlResponsFetch();

let autoPlay;

function getRandomImg() {
  function randomImg() {
    let randapi = Math.floor(Math.random() * el.id + 1);
    console.log(randapi);
    apiContentContainer.insertAdjacentHTML("afterend", randapi);
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

// ////////////////

// //////////// end task week 3 ---------
