const search = document.querySelector("#search")


const button = document.querySelector("#search-button")
let activeAdd= false
button.addEventListener("click", ()=>{
    if (!activeAdd) {
        search.classList.add(".active")
        search.style.width="200px"
        search.style.paddingLeft="10px"
        activeAdd=true
    } else{
        search.style.width = "0px"
        search.style.paddingLeft = "0px"
        activeAdd=false
    }
})

