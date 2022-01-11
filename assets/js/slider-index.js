const dot = document.querySelectorAll(".dot");
const slide = document.querySelectorAll("#slider img");
var indexSlide = 0;
dot.forEach((element) => {
  element.onclick = function () {
    const activeDot = document.querySelector(".dot.active");
    const activeItem = document.querySelector("#slider img.active");
    activeDot.classList.remove("active");
    activeItem.classList.remove("active");
    this.classList.add("active");
    slide[this.getAttribute("index")].classList.add("active");
  };
});
function autoShowSlide(amount) {
    const activeDot = document.querySelector(".dot.active");
    let currentIndex=activeDot.getAttribute('index');
    currentIndex++;
    if (currentIndex >= amount) currentIndex = 0;
    const activeItem = document.querySelector("#slider img.active");
    activeDot.classList.remove("active");
    activeItem.classList.remove("active");
    dot[currentIndex].classList.add("active");
    slide[currentIndex].classList.add("active");
}
setInterval(function () {
  autoShowSlide(3);
}, 5000);