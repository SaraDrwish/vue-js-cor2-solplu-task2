

let imgArr = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png"
]

let randImgBtn = document.querySelector(".random");
let autoImgBtn = document.querySelector(".auto");
let prevImgBtn = document.querySelector(".prev");
let nextImgBtn = document.querySelector(".next");

let imageBox = document.querySelector(".img-slider-img");

// let randImg ;
// let getRandomImg = ()=>{

    function getRandomImg(){
        let randImg = Math.floor(Math.random() * imgArr.length + 1);
        console.log(randImg)
        imageBox.src=`./assets/imgs/${randImg}.png`
    }


    // function testtime(){
        // setTimeout(()=>{
        //     let randImg = Math.floor(Math.random() * imgArr.length + 1) ;
        //         // document.querySelector(".img-slider-img").src=`./assets/imgs/${randImg}.png`
        //         console.log("testtime " + randImg)
        //         console.log("testtime ")
        // } , 1000)
    // } 
    // testtime()
    // console.log("testtime " + randImg)


 

    function autoDisplayImg(){
  
                 imgArr.forEach(arr => {
                 let arry = imageBox.src=`./assets/imgs/${arr}`;
                 console.log(arry)
                  });

    }
 
 let currentImg =0 ;

    function setImgUI(){
       return imageBox.src=`./assets/imgs/${imgArr[currentImg]}`
    }

    function nextImgSelct(){
        if( currentImg >= imgArr.length-1 ){
            currentImg = -1
        }
        currentImg++;
        return setImgUI();
    }

    // function nextImgSelct(){
    //     if( currentImg >= imgArr.length && (currentImg !== 0) ){
    //         if(currentImg == 0){
    //              currentImg = 1
    //         }else{currentImg = -1}
    //     }
    //     currentImg++;
    //     return setImgUI();
    // }

    function prevImgSelct(){
        if( currentImg <= 0 ){
                currentImg = imgArr.length
        }
        currentImg-- ;
        return setImgUI();
    }

    // function prevImgSelct(){
    //     if( currentImg <= 0  ){
    //             if(currentImg == 0){
    //                 currentImg = 1 ;
    //             }else{
    //                 currentImg = imgArr.length;
    //             }
    //     }
    //     currentImg-- ;
    //     return setImgUI();
    // }


randImgBtn.addEventListener("click" , getRandomImg );
autoImgBtn.addEventListener("click" , autoDisplayImg );
nextImgBtn.addEventListener("click" , nextImgSelct );
prevImgBtn.addEventListener("click" , prevImgSelct );

