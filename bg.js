const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImage(imgNumber){
    const image = new Image();
    let imageLocation
    if(imgNumber +1 < 3){
        imageLocation = `D:\\studyspace\\JavaScript\\momont\\images\\${imgNumber + 1}.jpg`;
    } else{
        imageLocation = `D:\\studyspace\\JavaScript\\momont\\images\\${imgNumber + 1}.png`;
    }
    image.src = imageLocation;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}


init()