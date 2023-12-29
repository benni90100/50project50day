const btnNext = document.querySelector("#next")
const btnprev = document.querySelector("#prev")
const lineActive = document.querySelector(".active-line")
const circles = document.querySelectorAll(".circle")
let index = 1

btnNext.addEventListener("click", () => {
    console.log(index);
    if (lineActive.style.width == 0) {
        lineActive.style.width = "120px";
        } else if (lineActive.style.width == "120px") {
        lineActive.style.width = "240px"
    }
else{
    lineActive.style.width= "320px"
}
    if (index<circles.length) {
        
        circles[index].classList.add("active");
        index++
    };

})
btnprev.addEventListener("click", () => {
    console.log(index);
    if (lineActive.style.width == "320px") {
        lineActive.style.width = "240px"
       
        } else if (lineActive.style.width == "240px") {
        lineActive.style.width = "120px"
    }
else{
    lineActive.style.width= "0%"
}
    if (index>0) {
        circles[index-1].classList.remove("active");
        index--
    };
})
