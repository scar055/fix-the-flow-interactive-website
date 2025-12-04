// stap 1:  selecteer de chat button
const openChatButton = document.querySelector(".ai-button");
// stap 2:  wacht tot iemand er op klikt
// stap 3:  verander de class van mijn chat venster, zodat deze zichtbaar wordt
openChatButton.addEventListener("click", function () {
  document.querySelector("section article").classList.add("visible-chat");
});
