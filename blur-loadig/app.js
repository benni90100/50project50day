const blur = document.querySelector("#image")
const cont = document.querySelector(".container")
const counter = document.createElement("h1")
counter.classList.add("h1-cont")

let loading = 80
function countdown() {
    loading--
    console.log(loading);
    blur.style.filter = `blur(${loading}px)`
    counter.style.filter = `opacity(${loading/100})`
    if (loading === 0) {
        console.log("finito");
        clearInterval(loadingStop)
    }
}

let loader = 0
function loaderCount() {
    loader++
    counter.textContent = `${loader}%`
    cont.append(counter)
    if (loader == 100) {
        clearInterval(loaderStop)
    }
}

let loaderStop = setInterval(loaderCount, 20);
let loadingStop = setInterval(countdown, 23)


