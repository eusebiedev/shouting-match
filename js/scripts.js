// UI Logic
function getUserInput() {
  const userInput = document.getElementById("userInput").value;
  document.querySelector("span#shout").innerText = userInput.toUpperCase();
}

function setFormSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    getUserInput();
    document.querySelector("div#response").removeAttribute("class");
  }
}

window.onload = function() {
  setFormSubmissionEventHandler();
}