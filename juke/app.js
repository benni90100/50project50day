const joke =[
    "Che cosa hanno in comune un televisore e una formica ? Le antenne!",
"Qual è la città preferita dai ragni ? Mosca!",
"Qual è la pianta più puzzolente ? Quella dei piedi!",
"Che cos'è una zebra? Un cavallo evaso dal carcere!", 
"Sapete perché il pomodoro non riesce a dormire ? Perché l’insalata… russa!",
"Qual è la nazione preferita dalle galline ? Il PortoGALLO!",
"Che cosa fa un chicco di caffè sotto la doccia ? Si...Lavazza!",
"Qual è l'auto preferita dai pinguini? La Polo",
"Qual è il colmo per una disoccupata ? Chiamarsi Assunta.",
"Qual è il colmo per un eschimese ? Prendere delle decisioni a caldo.",
"Qual è il colmo per un gorilla ? Entrare nel Guinness dei Primati.",
"Qual è il colmo per un’aquila reale ? Essere… finta.",
"Qual è il colmo per un cosmonauta ? Avere gli occhi fuori dalle orbite.",
"Qual è il colmo per un fotografo ? Mettere a fuoco un ghiacciaio.",
"Qual è il colmo per due divorziati americani ? Essere… stati uniti.",
"Qual è il colmo per un diavolo ? Avere una vita d’inferno.",
"Qual è il colmo per un cane ? Avere una bella gatta da pelare.",
"Qual è il colmo per una gallina ? Avere la pelle d’oca!"
]

const jokeContent = document.querySelector(".joke")
const button = document.querySelector(".button")
const p = document.createElement("p")
function getAJoke() {
    const index = Math.round(Math.random() * joke.length)
    p.textContent=joke[index]
    jokeContent.append(p)
}
button.addEventListener("click", getAJoke)