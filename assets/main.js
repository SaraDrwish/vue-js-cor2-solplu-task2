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

let imgSlidrImg = document.querySelector(".img-slider-img");
// let imgSlidr = document.querySelector(".img-slidr");
let imgsArr = ["1.png", "2.png", "3.png", "4.png","5.png" , "6.png" , "7.png", "8.png","9.png"];
let randbtn = document.querySelector(".random");
// console.log(imgSlidr);
imgSlidrImg.style.backgroundImage = 'url("./assets/imgs/1.png")';
// imgSlidr.style.backgroundImage = 'url("./imgs/1.png")';
console.log(imgSlidrImg);
// let randImg = Math.floor(Math.random() * imgsArr.length);
// console.log(randImg);

 

// ///////////////////////

let currentSlide = 0;
// const slides = document.querySelectorAll(".img-slidr img");
const totalSlides = imgsArr.length;

// const showSlide = (n) => {
//   imgsArr.forEach((slide) => slide.classList.remove("active"));
//   imgsArr[n].classList.add("active");
// };

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  // showSlide(currentSlide);
  // imgSlidrImg.style.backgroundImage = 'url("./assets/imgs/1.png")';
  imgSlidrImg.style.backgroundImage = `url(${currentSlide})`;

  // return currentSlide
};
console.log(prevSlide)

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  // showSlide(currentSlide);
  return nextSlide
};
console.log(nextSlide())

document.querySelector(".prev").addEventListener("click", prevSlide  );
document.querySelector(".next").addEventListener("click", nextSlide  );
randbtn.addEventListener("click", randomizeImages);

let autoplayInterval;

const startAutoplay = () => {
  autoplayInterval = setInterval(nextSlide, 1000);  
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

// startAutoplay();  

const randomizeImages = () => {
  imgsArr.forEach(() => {
    let imgSlidrImg = Math.floor(Math.random() * imgsArr.length);
    // const src = imgsArr[randomImageIndex].src;
    // slide.src = src;
    imgSlidrImg.style.backgroundImage =
    'url("./imgs/' + imgsArr[imgSlidrImg] + '.png")';
  });

  // randbtn.addEventListener("click", () => {
    setInterval(() => {
      // let imgSlidrImg = Math.floor(Math.random() * imgsArr.length);
      let imgSlidrImg = Math.floor(Math.random() * imgsArr.length);

      imgSlidrImg.style.backgroundImage =
        'url("./imgs/' + imgsArr[imgSlidrImg] + '.png")';
  
      console.log(imgSlidrImg);
    }, 1000);
  // });

};

// document.addEventListener("DOMContentLoaded", randomizeImages);

// ///////////////////////
