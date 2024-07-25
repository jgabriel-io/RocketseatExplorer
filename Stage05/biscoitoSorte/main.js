const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneText = document.querySelector("#fortuneText");

const cookieBtn = document.querySelector("#closedCookie");
const tryAgainBtn = document.querySelector("button");

const fortunePhrases = [
    "Nunca é tarde demais para seguir seus sonhos.",
    "A cada novo dia, uma nova oportunidade para ser feliz.",
    "O sucesso vem para aqueles que persistem.",
    "Acredite no poder dos seus sonhos e trabalhe para realizá-los.",
    "A gratidão transforma o que temos em suficiente.",
    "Seja a mudança que você deseja ver no mundo.",
    "A vida é uma jornada, não um destino.",
    "Aprenda com o passado, viva no presente, sonhe com o futuro.",
    "A verdadeira riqueza está nas experiências, não nas posses.",
    "O amor é a linguagem universal do coração.",
    "Nunca subestime a força do seu potencial.",
    "Cada novo dia é uma página em branco. Escreva uma boa história.",
    "O otimismo é a fé em ação.",
    "A felicidade é uma jornada, não um destino.",
    "O universo conspira a favor daqueles que sonham e agem."
];


cookieBtn.addEventListener("click", openCookie);
tryAgainBtn.addEventListener("click", toggleScreen);
window.addEventListener("keydown", clickButton); 

function openCookie() {
    let randomNum = Math.round(Math.random() * fortunePhrases.length);
    fortuneText.innerText = fortunePhrases[randomNum];

    toggleScreen();
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function clickButton(e) {
    if (e.key === "Enter" && screen2.classList.contains("hide")) {
        openCookie(); 
    } else if ((e.key === "Enter" || e.key === "Escape") && screen1.classList.contains("hide")) {
        toggleScreen();
    }
}