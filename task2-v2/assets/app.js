

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
        // let i=1
        // if( i < imgArr.length - 1 ){
        //     i++
        // }else{
        //     i=1
        // }
        // setTimeout(autoDisplayImg , 100)

        // setTimeout(()=>{
                // let counterImg = imgArr.length ;
                 imgArr.forEach(arr => {
                 let arry = imageBox.src=`./assets/imgs/${arr}`;
                 console.log(arry)
                //  console.log(arry++)
                 });
                //  console.log(arry)
            // console.log("autoDisplayImg: " + "counterImg++" + counterImg + (counterImg++) + "imgCounter" + imgCounter + imgCounter++ )
        // } , 1000)
    }
 
 let currentImg = 1 ;

    function setImgUI(){
       return imageBox.src=`./assets/imgs/${currentImg}.png`
    }

    function nextImgSelct(){
        if( currentImg >= imgArr.length && (currentImg !== 0) ){
            // if(imgArr.length  != 0){
            //     currentImg = -1
            // }else{
            //      imgArr.length = 1
            // }
            
          currentImg = -1

        }
        currentImg++;
        return setImgUI();
    }

    function prevImgSelct(){
        if( currentImg <= 1 && (currentImg !== 0)  ){

            // if(imgArr.length != 0  ){
            //     currentImg-- ;
     
            //  }else{
            //       imgArr.length = 1
            //  }

                // currentImg-- ;

                currentImg = imgArr.length

        }
      
        currentImg-- ;

        return setImgUI();
    }


randImgBtn.addEventListener("click" , getRandomImg );
autoImgBtn.addEventListener("click" , autoDisplayImg );
nextImgBtn.addEventListener("click" , nextImgSelct );
prevImgBtn.addEventListener("click" , prevImgSelct );

