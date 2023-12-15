const passContent = document.querySelector(".pass-content")
const bnt = document.querySelector(".button")
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Z"]
const lowerCase = ["a", "b", "c", "d", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "z"]
const numberCase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const specialCase = ["!", "è", "é", "_", "-", ".", ".", "'", "?", "[", "]"]
let password = []
function passwordGnerator() {
    const number = 20
    // let password = []

    for (let i = 0; i < number/4; i++) {
        const indexRandomUpper = Math.round(Math.random() * upperCase.length-1)
        const indexRandomNumber = Math.round(Math.random() * numberCase.length-1)
        const indexRandomSpecial = Math.round(Math.random() * specialCase.length-1)
        const indexRandomLower = Math.round(Math.random() * lowerCase.length-1)
        
        password.push(lowerCase[indexRandomLower], upperCase[indexRandomUpper], specialCase[indexRandomSpecial], 
            numberCase[indexRandomNumber],)
    }}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    
    
}
// let passwordString = password.join("")

console.log(password);

const p = document.createElement("p")
bnt.addEventListener("click",()=>{
    passwordGnerator()
    shuffleArray(password)
    p.textContent=password
    p.classList.add("p")
    passContent.appendChild(p)
    password=[]
    
})

