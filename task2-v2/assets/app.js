
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

    function getRandomImg(){
        let randImg = Math.floor(Math.random() * imgArr.length + 1);
        console.log(randImg)
        imageBox.src=`./assets/imgs/${randImg}.png`
    }

 let currentImg = 0 ;

    function autoDisplayImg(){
        // imgArr.forEach(arr => {
        // let arry = imageBox.src=`./assets/imgs/${arr}`;
        // console.log(arry)
        // });
        // for()
        
        setInterval( ()=>{
            if( currentImg >= imgArr.length-1 ){
                currentImg = -1
            }
            currentImg++;
            return setImgUI();
        } , 1000);
    }
        // setTimeout(autoDisplayImg , 800);

// autoDisplayImg()

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

    function prevImgSelct(){
        if( currentImg <= 0 ){
                currentImg = imgArr.length
        }
        currentImg-- ;
        return setImgUI();
    }


// randImgBtn.addEventListener("click" , setTimeout(autoDisplayImg , 800));
randImgBtn.addEventListener("click" , getRandomImg);
autoImgBtn.addEventListener("click" , autoDisplayImg );
nextImgBtn.addEventListener("click" , nextImgSelct );
prevImgBtn.addEventListener("click" , prevImgSelct );

