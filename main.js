const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let mensage = document.querySelector(".mensage")
const fortunes = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.", 
  "A vida trará coisas boas se tiver paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Siga os bons e aprenda com eles."];

mensage.textContent = fortunes[Math.floor(Math.random() * fortunes.length)]

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function handleTryClick(event) {
  event.preventDefault();
  toggleScreen()
}


function handleResetClick(event) {
  event.preventDefault();
  toggleScreen()

  mensage.textContent = fortunes[Math.floor(Math.random() * fortunes.length)]
}

function toggleScreen() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}
