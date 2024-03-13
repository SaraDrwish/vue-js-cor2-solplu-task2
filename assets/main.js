console.log("hi main . js ");
//1

//////end

// t2

let imgSlidr = document.querySelector(".img-slidr");
let imgsArr = ["1.png", "2.png", "3.png", "4.png"];
let randbtn = document.querySelector(".random");
imgSlidr.style.backgroundImage = 'url("./imgs/1.png")';

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
