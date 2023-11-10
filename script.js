let wordInput = document.getElementById("word-input");
let button = document.getElementById("btn");
let wordExtender = document.getElementById("word-extender");

function wordRandomizer(word) {
  let newWord = word.split("");
  for (let i = 0; i < newWord.length; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = newWord[i];

    newWord[i] = newWord[randomIndex].toLowerCase();
    newWord[randomIndex] = temp.toLowerCase();
  }

  return newWord.join("");
}

function sentenceRandomizer(sentence) {
  let newSentence = sentence.split(" ");

  for (let j = 0; j < newSentence.length; j++) {
    newSentence[j] = wordRandomizer(newSentence[j]);
  }

  return newSentence.join(" ");
}

function wordStorage() {
  let inputValue = wordInput.value;
  let result = sentenceRandomizer(inputValue);
  wordExtender.innerHTML += `
  <div>
  <p>${result}<p>
  <div>

  `;
}

button.addEventListener("click", wordStorage);
