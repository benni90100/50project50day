const opzioni = [
    "cantonese",
    "Fujian",
    "hakka",
    "Henan",
    "Hong Kong",
    "huaiyang",
    "Hunan",
    "Jiangsu",
    "pechinese",
    "Shando",
    "Shanghai",
    "Sichuan",
    "sino - islam",
    "teochew",
    "Tianjin"
]
async function posts() {
    try {
        const post = await fetch("https://jsonplaceholder.typicode.com/posts")
        const jsnPost = await post.json()
        console.log(jsnPost);
        return jsnPost.title
    } catch (error) {
        console.error(error);
    }
}
const title = Array.from(posts())

const input = document.querySelector("#autocomplete")
const container = document.querySelector(".container")
const li = document.querySelector("li")
input.addEventListener("input", (e) => {
    const valoreInput = e.target.value.toLowerCase();

    container.innerHTML = ""
    if (valoreInput === "") {
        return
    } else {
        const risultatiFiltrati = title.filter((provincia) => {
            for (let u = 0; u < provincia.length; u++) {
                const letteraIniziale = provincia.charAt(u).toLowerCase();
                if( letteraIniziale.includes(valoreInput)){
                    return true
                }
            }
            return false


        });
        risultatiFiltrati.forEach((risultato) => {
            const li = document.createElement("li")
            li.textContent = risultato;
            container.appendChild(li);
            li.addEventListener("click", () => {
                input.value = risultato
            })
        });
    }

});




