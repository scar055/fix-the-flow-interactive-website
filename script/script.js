// stap 1:  selecteer de chat button
const openChatButton = document.querySelector(".ai-button");
// stap 2:  wacht tot iemand er op klikt
// stap 3:  verander de class van mijn chat venster, zodat deze zichtbaar wordt
openChatButton.addEventListener("click", function () {
  document.querySelector("section article").classList.add("visible-chat");
  document.querySelector("h1").classList.add("invisible-heading");
});

// voor de close button

// stap 1:  selecteer de close button
const closeChatButton = document.querySelector("button");
// stap 2:  wacht tot iemand er op klikt
// stap 3:  verwijder de class van mijn chat venster, zodat deze niet meer zichtbaar wordt
closeChatButton.addEventListener("click", function () {
  document.querySelector("section article").classList.remove("visible-chat");
  document.querySelector("h1").classList.remove("invisible-heading");
});

// zorgt er voor dat het form niet de pagina refreshed

const formEnter = document.querySelector("form");

formEnter.addEventListener("submit", function (formSumbit) {
  document.querySelector("section article").classList.add("visible-chat");
  document.querySelector("h1").classList.add("invisible-heading");
  formSumbit.preventDefault();
});

// stap 1 selecteer de chat input
const chatInput = document.querySelector("input[type=text]");
// stap 2 check of er iemand op de chat heeft geklikt
// stap 3 verander de class van mijn chat venster, zodat deze zichtbaar wordt
chatInput.addEventListener("focus", function () {
  document.querySelector("section article").classList.add("visible-chat");
  document.querySelector("h1").classList.add("invisible-heading");
});
