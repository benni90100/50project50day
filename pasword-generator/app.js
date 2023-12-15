const passContent = document.querySelector(".pass-content")
const bnt = document.querySelector(".button")
const inputNumber = document.querySelector("#number")
const checkUpperCase = document.querySelector("#uppercase")
const checkLowerCase = document.querySelector("#lowercase")
const checkNumbers = document.querySelector("#numbers")
const checkSpecial = document.querySelector("#special")
const copy = document.querySelector(".copy")
const p = document.createElement("p")

//variabili con caratteri disponibili
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Z"]
let lowerCase = ["a", "b", "c", "d", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "z"]
let numberCase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let specialCase = ["!", "è", "é", "_", "-", ".", ".", "'", "?", "[", "]"]

//funzione genera password
let password = []
function passwordGnerator() {
    const number = inputNumber.value
    for (let i = 0; i < number; i++) {
        let currentUpperCase = checkUpperCase.checked ? [...upperCase] : []
        let currentLowerCase = checkLowerCase.checked ? [...lowerCase] : []
        let currentNumber = checkNumbers.checked ? [...numberCase] : []
        let currentSpecial = checkSpecial.checked ? [...specialCase] : []
        const indexRandomUpper = Math.round(Math.random() * currentUpperCase.length - 1)
        const indexRandomNumber = Math.round(Math.random() * currentNumber.length-1)
        const indexRandomSpecial = Math.round(Math.random() * currentSpecial.length-1)
        const indexRandomLower = Math.round(Math.random() * currentLowerCase.length-1)
        
        password.push(currentLowerCase[indexRandomLower], currentUpperCase[indexRandomUpper], currentSpecial[indexRandomSpecial], 
            currentNumber[indexRandomNumber],)
    }}

//funzione che rende l'array casuale
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//DOM
bnt.addEventListener("click",()=>{
    passwordGnerator()
    shuffleArray(password)
    let passwordString = password.join("").slice(0, inputNumber.value)
    p.textContent=passwordString
    p.classList.add("p")
    passContent.appendChild(p)
    password=[]
    copy.addEventListener("click", () => {
        navigator.clipboard.writeText(passwordString)
            .then(() => {
                alert("password copiata con successo")
            })
            .catch(err => {
                console.error('Errore durante la copia della password:', err);
            });
    })    
})


