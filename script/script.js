// stap 1:  selecteer de chat button
const openChatButton = document.querySelector(".ai-button");
// stap 2:  wacht tot iemand er op klikt
// stap 3:  verander de class van mijn chat venster, zodat deze zichtbaar wordt
openChatButton.addEventListener("click", function () {
  document.querySelector("section article").classList.add("visible-chat");
});

// voor de close button

// stap 1:  selecteer de close button
const closeChatButton = document.querySelector("button");
// stap 2:  wacht tot iemand er op klikt
// stap 3:  verwijder de class van mijn chat venster, zodat deze niet meer zichtbaar wordt
closeChatButton.addEventListener("click", function () {
  document.querySelector("section article").classList.remove("visible-chat");
});

// zorgt er voor dat het form niet de pagina refreshed

const formEnter = document.querySelector("form");

formEnter.addEventListener("submit", function (e) {
  document.querySelector("section article").classList.add("visible-chat");
  e.preventDefault();
});
