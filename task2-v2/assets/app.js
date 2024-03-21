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

// //////////// start task task week 3----------------------------------------------------------------

let apiContent = document.querySelector(".apiContent");
let apiNextBtn = document.querySelector(".nextApi");
let apiPrevBtn = document.querySelector(".prevApi");
let apiAutoBtn = document.querySelector(".autoApi");
let apiRandomBtn = document.querySelector(".randomApi");
let apiStopBtn = document.querySelector(".stopApi");
let apiData;
let apiCount = 0;
let url = "https://jsonplaceholder.typicode.com/posts";
let handlResponsFetch = async () => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    if (response.status == 200) {
      data.map((dta, index) => {
        apiContent.innerHTML = `
        <h3>${data[0].id} </h3> 
        <br>
        <span>${data[0].title}</span> 
        <br>
        <p>${data[0].body}</p> `;
        let counter = 0;
        let apiLength = data.length;
        let nextfunctrynext = () => {
          counter = (counter + 1) % apiLength;
          console.log("++++data[counter].id:", data[counter].id);
          apiContent.innerHTML = ` <h3>${data[counter].id} </h3>
           <br>
            <span>${data[counter].title}</span>  
            <br>
            <p>${data[counter].body}</p> `;
        };
        apiNextBtn.addEventListener("click", nextfunctrynext);
        // //////////
        let prevfunctrynext = () => {
          counter = (counter - 1 + apiLength) % apiLength;
          console.log("++++data[counter].id:", data[counter].id);
          apiContent.innerHTML = ` <h3>${data[counter].id} </h3>
           <br>
            <span>${data[counter].title}</span>  
            <br>
            <p>${data[counter].body}</p> `;
        };
        apiPrevBtn.addEventListener("click", prevfunctrynext);
        // //////////
        let autofunctrynextVAAR;
        let autofunctrynext = () => {
          autofunctrynextVAAR = setInterval(() => {
            console.log("autofunctrynext");
            counter = (counter + 1) % apiLength;
            apiContent.innerHTML = ` <h3>${data[counter].id} </h3>
           <br>
            <span>${data[counter].title}</span>  
            <br>
            <p>${data[counter].body}</p> `;
          }, 2000);
        };
        apiAutoBtn.addEventListener("click", autofunctrynext);
        // //////////
        let stopAutoApiGenerate = () => {
          console.log("stopAutoApiGenerate");
          clearInterval(autofunctrynextVAAR);
          clearInterval(randomGenerateVaar);
        };
        apiStopBtn.addEventListener("click", stopAutoApiGenerate);
        ////////////
        let randomGenerateVaar;

        let randomGenerate = () => {
          randomGenerateVaar = setInterval(() => {
            console.log("randomGenerate");
            let randomApiNum = Math.floor(Math.random() * apiLength + 1);
            apiContent.innerHTML = ` <h3>${data[randomApiNum].id} </h3>
           <br>
            <span>${data[randomApiNum].title}</span>  
            <br>
            <p>${data[randomApiNum].body}</p> `;
          }, 2000);
        };
        apiRandomBtn.addEventListener("click", randomGenerate);
        ////////////
      });
    } else {
      console.log("this is the server error", data);
    }
  } catch (error) {
    console.log("Fetch error coming from : catch error is : ", error);
  }
};
handlResponsFetch();
// /////////////////////////////////////////////////////////////////////task 3 end
