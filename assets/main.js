console.log("hi main . js ");
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
//////end

// t2

let imgSlidr = document.querySelector(".img-slider-img");
// let imgSlidr = document.querySelector(".img-slidr");
let imgsArr = ["1.png", "2.png", "3.png", "4.png","5.png" , "6.png" , "7.png", "8.png"];
let randbtn = document.querySelector(".random");
console.log(imgSlidr);
imgSlidr.style.backgroundImage = 'url("./imgs/1.png")';
console.log(imgSlidr);
// let randImg = Math.floor(Math.random() * imgsArr.length);
// console.log(randImg);

// randbtn.addEventListener("click", () => {
//   setInterval(() => {
//     let randImg = Math.floor(Math.random() * imgsArr.length);
//     imgSlidr.style.backgroundImage =
//       'url("./imgs/' + imgsArr[randImg] + '.png")';

//     console.log(randImg);
//   }, 1000);
// });

// end

// ///////////////////////

let currentSlide = 0;
const slides = document.querySelectorAll(".img-slidr img");
const totalSlides = slides.length;

const showSlide = (n) => {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[n].classList.add("active");
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
};

document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);

let autoplayInterval;

const startAutoplay = () => {
  autoplayInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

startAutoplay(); // Start autoplay by default

const randomizeImages = () => {
  slides.forEach((slide) => {
    const randomImageIndex = Math.floor(Math.random() * totalSlides);
    const src = slides[randomImageIndex].src;
    slide.src = src;
  });
};

document.addEventListener("DOMContentLoaded", randomizeImages);

// ///////////////////////
