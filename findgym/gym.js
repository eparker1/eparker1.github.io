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
    section1.style.backgroundSize = "contain";
    section1.style.backgroundRepeat = "no-repeat";
    section1.style.width = "100vw";
    section1.style.height = "500px";
    i++;
    console.log(i);


    if (i == arr.length){
        i = 0;
    } 
    
};

setInterval(Switch,4000);