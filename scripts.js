const menuBtn = document.getElementById("menu-btn")
const menuToggle = document.getElementById("menu-toggle")



menuBtn.addEventListener("click", function(){
    menuToggle.classList.toggle("show")
})