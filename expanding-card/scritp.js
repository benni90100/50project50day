const panels = document.querySelectorAll(".panel")

function activeApply() {
        panels.forEach(panel => {
            panel.addEventListener("click", () => {
                panels.forEach(panel => panel.classList.remove("active"))
                panel.classList.add("active")
        });
    }) 
}
activeApply()

// panels.forEach(panel => {
//     panel.addEventListener("click", () => {
//         remove()
//         panel.classList.add("active")
//     })
// })
// function remove() {
//     panels.forEach(panel => {
//         panel.classList.remove("active")

//     })
// }