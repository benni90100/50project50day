const textword = document.querySelector("#textword")
const btn = document.querySelector("#btn")
const input = document.querySelector("#textword")
const cardContainer = document.querySelector(".card-container")


async function dictionary() {

    if (input.value) {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
        const data = await response.json()
        // console.log(data[].phonetic);
        // console.log(data[0].meanings[2].definitions[0].definition);
        
        cardContainer.innerHTML = `
 <div class="card" style="width: 18rem;">
     <div class="card-body">
         <h5 class="card-title">${data[0].word}</h5>
         <h6 class="card-subtitle mb-2 text-muted">pronuncia fonetica ${data[0].phonetics[1].text}</h6>
         <p class="card-text"><strong>definizione</strong> <br/>${data[0].meanings[2].definitions[0].definition}</p>
         <p class="card-text"><strong>esempio di utilizzo</strong> <br/>${data[0].meanings[2].definitions[0].example}</p>
         <a href="https://en.wiktionary.org/wiki/${input.value}" class="card-link">scopri di più su wikidizionario</a>
         
     </div>
 </div>    
    `
    }
    else {
        alert("inserisci una parola")
    }


}
document.querySelector('#form').addEventListener('submit', function (event) {
    event.preventDefault()
})
btn.addEventListener("click", dictionary)

