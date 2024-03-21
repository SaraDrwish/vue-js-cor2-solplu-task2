// ///////
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

let autoPlay;
let imageBox = document.querySelector(".img-slider-img");
let currentImg = 0;

function getRandomImg() {
  function randomImg() {
    let randImg = Math.floor(Math.random() * imgArr.length + 1);
    console.log(randImg);
    imageBox.src = `./assets/imgs/${randImg}.png`;
  }
  autoPlay = setInterval(randomImg, 900);
}
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
  let imageBox = document.querySelector(".img-slider-img");
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
// /////////
// //////////// end   edit task 2---------

// //////////// start task task week 3---------

let apiTitle = document.querySelector(".img-slider-h3-title");
let apiPost = document.querySelector(".img-slider-p");
let apispanId = document.querySelector(".apiContent span");
let apiContent = document.querySelector(".apiContent");

let apiData;
let apiCount = 0;
let url = "https://jsonplaceholder.typicode.com/posts";

let handlResponsFetch = async () => {
  try {
    let response = await fetch(url);
    let data = await response.json();

    if (response.status == 200) {
      console.log(data);
      // console.log(data[1].title);
      // console.log(data[1].id);
      data.map((dta, index) => {
        console.log("ddattaa : will appear 100 time");
        // console.log(d);
        console.log("the id of all ....", dta.title, "...indexxxxx:", index);
      });
      // console.log("dta[1].id::::", data[1].id);
    } else {
      console.log("this is the server error", data);
    }
    // console.log("the data is : ", data);
  } catch (error) {
    console.log("Fetch error coming from : catch error is : ", error);
  }
  // console.log(data[0].title);
  // console.log(data[0].id);
  // console.log(data[1].title);
  // console.log(data[1].id);

  // .then((data) => {
  //   console.log("data is : (array) ");
  //   console.log(data);
  //   apiData = data.forEach((el) => {
  //     apiTitle = `<span>${el.id}</span>`;
  //     let apih3 = `<h3>${el.title}</h3>`;
  //     let apiP = `<p>${el.body}</p>`;

  //     let apiSpanElm = document
  //       .querySelector(".apiContent")
  //       .insertAdjacentHTML("beforeend", apiP);
  //     let apih3Elm = document
  //       .querySelector(".apiContent")
  //       .insertAdjacentHTML("beforeend", apih3);

  //     let apiTitleElm = document
  //       .querySelector(".apiContent")
  //       .insertAdjacentHTML("beforeend", apiTitle);

  //     console.log(el);
  //     console.log(el.body + "   --  " + el.id + "   --  " + el.title);
  //    });
  // })
  // .catch((error) => console.log("error is : " + error));
};

handlResponsFetch();

// /////////////////////////////////////////////////////////////////////task 3 end
