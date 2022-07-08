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
