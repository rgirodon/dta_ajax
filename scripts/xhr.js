var verseChoose = document.getElementById('verse-choose');

var poemDisplay = document.getElementById('pre_display');


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

updateDisplay('vers3');

verseChoose.value = 'vers3';
