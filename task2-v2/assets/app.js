// let imgArr = [
//   "1.png",
//   "2.png",
//   "3.png",
//   "4.png",
//   "5.png",
//   "6.png",
//   "7.png",
//   "8.png",
//   "9.png",
// ];

let randImgBtn = document.querySelector(".random");
let autoImgBtn = document.querySelector(".auto");
let stopImgBtn = document.querySelector(".stop");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
// ///////////
let apiTitle = document.querySelector(".img-slider-h3-title");
let apiPost = document.querySelector(".img-slider-p");
let apispanNum = document.querySelector(".apiContent span");
let apiContent = document.querySelector(".apiContent");
// //////////////////
// let apiTitle = document.createElement("h3");
// let apiPost = document.createElement("p");
// let apispanNum = document.createElement("span");
// apiTitle.className = "img-slider-h3-title";
// apiPost.className = "img-slider-p";
// apispanNum.className = "span";
// apiContent.className = "apiContent";
// ////////////////////
// //////////// start task week 3 ---------
let apiData;
let apiCount = 0;
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    // console.log("the res is object respons : " + res);
    let JsonResponse = res.json();
    return JsonResponse ;
  })
  .then((data) => {
     // console.log( "type od data : " + typeof data + " //.... //"+ data + "end data");
    apiData = data.forEach((el,index)=> {

      let apiIdNum = `<span>${el.id}</span>`;
      let apih3 = `<h3>${el.title} </h3>`;
      let apiP = `<p>${el.body}</p>`;

    //   let apiIdElm = document.querySelector(".apiContent");
        //   let apih3Elm = document.querySelector(".apiContent h3");
    //   let apiPElm = document.querySelector(".apiContent p");
        
        if(index==0){
            let apiIdElm= document.querySelector(".apiContent").insertAdjacentHTML("beforeend", apiIdNum);
            let apih3Elm = document.querySelector(".apiContent").insertAdjacentHTML("beforeend", apih3);    
            let apiPElm = document.querySelector(".apiContent").insertAdjacentHTML("beforeend", apiP); 
        }  else if(index >2 && index <5){
        //     apiIdElm.insertAdjacentHTML("beforeend", apiIdNum);
        //     apih3Elm.insertAdjacentHTML("beforeend", apih3);    
        //    apiPElm.insertAdjacentHTML("beforeend", apiP); 
        let apiIdElm= document.querySelector(".apiContent").insertAdjacentHTML("beforeend", apiIdNum);
            let apih3Elm = document.querySelector(".apiContent").insertAdjacentHTML("beforeend", apih3);    
            let apiPElm = document.querySelector(".apiContent").insertAdjacentHTML("beforeend", apiP); 
            
        }
 
        // ////
        // let currentPost = 0;
        // function setUI() {
        //   return PostBox = el.body ;
        // }
        // function nextSelct() {
        //   if (index == 1) {
        //     currentPost = -1;
        //   }
        //   currentPost++;
        //   return setUI(); // insted of setimgui
        // }
        // function prevSelct() {
        //   if (currentPost <= 0) {
        //     currentPost = el.body;
        //   }
        //   currentPost--;
        //   return setUI();
        // }
        // ////
     let datamapel = data.map(el=>el.id);
     console.log( "datamapel: " + datamapel  );

    //  console.log(data.map(el=> { el.id}) );
    // console.log("Data: "+  el , "/,,,/");
   //console.log(el.body+"-- "+ el.id+"--"+el.title); //all of the data of the 100 elment is here
    });
  })
  .catch((error) => console.log("error is : " + error));

//   //////////////////

// let autoPlay;
// function getRandomImg() {
//   function randomImg() {
//     let randapi = Math.floor(Math.random() * el.id + 1);
//     console.log(randapi);
//     apiContentContainer.insertAdjacentHTML("afterend", randapi);
//   }
//   autoPlay = setInterval(randomImg, 900);
// }
// function autoDisplayImg() {
//   autoPlay = setInterval(() => {
//     if (currentImg >= imgArr.length - 1) {
//       currentImg = -1;
//     }
//     currentImg++;
//     return setImgUI();
//   }, 1000);
// }
// function stopAutoPlayImg() {
//   clearInterval(autoPlay);
// }


        // let currentPost = 0;
        // function setUI() {
        //   return PostBox = el.body ;
        // }
        // function nextSelct() {
        //   if (index == 1) {
        //     currentPost = -1;
        //   }
        //   currentPost++;
        //   return setUI(); // insted of setimgui
        // }
        // function prevSelct() {
        //   if (currentPost <= 0) {
        //     currentPost = el.body;
        //   }
        //   currentPost--;
        //   return setUI();
        // }
      
        // ////

// randImgBtn.addEventListener("click", getRandomImg);
// autoImgBtn.addEventListener("click", autoDisplayImg);
// stopImgBtn.addEventListener("click", stopAutoPlayImg);
// nextBtn.addEventListener("click", nextSelct);
// prevBtn.addEventListener("click", prevSelct);

// ////////////////

// //////////// end task week 3 ---------
