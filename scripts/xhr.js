var verseChoose = document.querySelector('select');
var poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
    var verse = verseChoose.value;
    updateDisplay(verse);
};

function updateDisplay(verse) {
    var url = 'data/' + verse + '.txt';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';
    request.onload = function() {
      poemDisplay.textContent = request.response;
    };
    request.send();
};

updateDisplay('vers1');

verseChoose.value = 'vers1';