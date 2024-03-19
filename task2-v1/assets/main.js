//1
setInterval(() => {
  let box1 = document.querySelector(".box1");
  let width = Math.floor(Math.random() * 11) + 1;
  let height = Math.floor(Math.random() * 11) + 1;
  let randomColor = "#" + Math.floor(Math.random() * 11111111).toString(16);

  box1.style.width = width + "rem";
  box1.style.height = height + "rem";
  box1.style.backgroundColor = randomColor;
}, 1000);
 
// ////////////////////////////////////////////////////////////////////////////////////
// t2
let imgSlidrImg = document.querySelector(".img-slider-img");
let imgsArr = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"];
imgSlidrImg.style.backgroundImage = 'url("./assets/imgs/1.png")';

let randbtn = document.querySelector(".random");
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let auto = document.querySelector(".auto")
 
// ///////////////////////

let currentSlide = 0;
const totalSlides = imgsArr.length;

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  imgSlidrImg.style.backgroundImage = `url("./assets/imgs/${imgsArr[currentSlide]}")`;
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  imgSlidrImg.style.backgroundImage = `url("./assets/imgs/${imgsArr[currentSlide]}")`;
};

const randomizeImages = () => {
  setInterval(() => {
    imgsArr.forEach(() => {
      let randomImageIndex = Math.floor(Math.random() * imgsArr.length);
      imgSlidrImg.style.backgroundImage = `url("./assets/imgs/${imgsArr[randomImageIndex]}")`;
    });
  }, 900);
};

let autoplayInterval;
const startAutoplay = () => {
  autoplayInterval = setInterval(nextSlide, 500);  
};
const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
randbtn.addEventListener("click", randomizeImages);
auto.addEventListener("click", startAutoplay );

// ///////////////////////////////////////////////////////////////////////////////////
