console.log("hi main . js ");
//1

setInterval(() => {
  var box1 = document.querySelector(".box1");
  var width = Math.floor(Math.random() * 20) + 5; // Random width between 50px and 250px
  var height = Math.floor(Math.random() * 20) + 5; // Random height between 50px and 250px
  var randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16); // Random color

  box1.style.width = width + "rem";
  box1.style.height = height + "rem";
  box1.style.backgroundColor = randomColor;
}, 1000);
//////end

// t2

let imgSlidr = document.querySelector(".img-slidr");
let imgsArr = ["1.png", "2.png", "3.png", "4.png"];
let randbtn = document.querySelector(".random");
console.log(imgSlidr);
imgSlidr.style.backgroundImage = 'url("./imgs/1.png")';
console.log(imgSlidr);
// let randImg = Math.floor(Math.random() * imgsArr.length);
// console.log(randImg);

randbtn.addEventListener("click", () => {
  setInterval(() => {
    let randImg = Math.floor(Math.random() * imgsArr.length);
    imgSlidr.style.backgroundImage =
      'url("./imgs/' + imgsArr[randImg] + '.png")';

    console.log(randImg);
  }, 1000);
});

// end
