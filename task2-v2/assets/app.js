

let imgArr = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
]

let randImgBtn = document.querySelector(".random");
let autoImgBtn = document.querySelector(".auto");
let prevImgBtn = document.querySelector(".prev");
let nextImgBtn = document.querySelector(".next");

randImgBtn.addEventListener("click" , getRandomImg );

// let randImg ;
// let getRandomImg = ()=>{

function getRandomImg(){
    let randImg = Math.floor(Math.random() * imgArr.length);
    console.log(randImg)
    document.querySelector(".img-slider-img").src=`./assets/imgs/${randImg}.png`
}

function autoDisplayImg(){

}

//   setTimeout( function(){
//         randImg = Math.floor(Math.random() * imgArr.length);
//         console.log(randImg)
//     } , 100)


    //  randImg = Math.floor(Math.random() * imgArr.length);
    //  console.log(randImg)

// }

// console.log(getRandomImg)


getRandomImg()

 