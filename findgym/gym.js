const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navlinkloc = document.querySelector(".nav-link-loc");
const locations = document.querySelector(".locations");

console.log(navlinkloc);

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

navlinkloc.addEventListener("click", () => {
    locations.classList.toggle("active");

})

//section 2 
var arr = ["image2.jpg", "image3.jpg", "image4.jpg"];
const section1 = document.getElementById("section1");
var i = 0;

function Switch() {
    section1.style.background = `url(${arr[i]})`;
    section1.style.backgroundSize = "cover";
    section1.style.backgroundRepeat = "no-repeat";
    section1.style.width = "100vw";
    section1.style.height = "300px";

    i++;


    if (i == arr.length){
        i = 0;
    } 
    
};

setInterval(Switch,4000);

const title1= document.querySelector("#title1");
const title2 = document.querySelector(".title2");
const button1 = document.querySelector(".button1");

function animateDown() {
    title1.classList.toggle("left");
    title2.classList.toggle("top");
    button1.classList.toggle("right");
}

setInterval(animateDown,6000);

const navbranding = document.querySelector("#move");
const buttonmove = document.getElementById("move");

function Up(){
    // e.preventDefault();
    navbranding.scrollIntoView({
        behavior: "smooth"
    });
}

buttonmove.addEventListener("click", Up);

//section4
const images = new Array("image5.jpg","image6.jpg","image7.jpg");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const image = document.getElementById("image-slide");

var position = 0;
image.src = images[0];

function ImagesliderNEXT (){
    position ++;

    if (position >= images.length){
        position = 0;
    }
    image.src = images[position];

}

next.addEventListener("click", ImagesliderNEXT);

function ImagesliderPREV() {
    if (position <= 0) {
        image.src = images[0];
        
    }
    else {
        position --;

        image.src = images[position];
    }
}

prev.addEventListener("click", ImagesliderNEXT);
