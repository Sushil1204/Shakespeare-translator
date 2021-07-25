let btnTranslate = document.getElementById('btn__translator');
let input = document.getElementById('input__text');
let output = document.getElementById('output__text');

let url = 'https://api.funtranslations.com/translate/shakespeare.json';

function createURL(text) {
  return url + '?text=' + text;
}

function clickHandler() {
  let inputText = input.value;
  let outputText = '';
  fetch(createURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      outputText = json.contents.translated;
      output.value = outputText;
    })
    .catch((err) => console.log(err));
}

btnTranslate.addEventListener('click', clickHandler);