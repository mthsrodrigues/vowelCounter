let vowelCounter = 0;

const inputText = document.querySelector(".input-text");
const checkButton = document.querySelector(".check-button");
const message = document.querySelector(".message");

function reloadPage() {
  location.reload();
}

checkButton.addEventListener("click", function () {
  let textTyped = "";
  textTyped = inputText.value;
  inputText.value = "";

  textSplit = textTyped.toLowerCase().split("");

  for (let i = 0; i < textTyped.length; i++) {
    if (
      textSplit[i] === "a" ||
      textSplit[i] === "e" ||
      textSplit[i] === "i" ||
      textSplit[i] === "o" ||
      textSplit[i] === "u"
    ) {
      vowelCounter++;
    }
    if (vowelCounter > 1) {
      message.innerHTML = `qntd de vogais = ${vowelCounter}`;
    } else {
      message.innerHTML = `qntd de vogais = ${vowelCounter}`;
    }
    let setTimeOut = setTimeout(reloadPage, 3500);
  }
});
