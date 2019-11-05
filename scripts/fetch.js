var verseChoose = document.querySelector('select');
var poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
    var verse = verseChoose.value;
    updateDisplay(verse);
};

function updateDisplay(verse) {
    
    var url = 'data/' + verse + '.txt';
    
    fetch(url)
        .then(
            function(response) {
                response.text()
                    .then(
                        function(text) {
                            poemDisplay.textContent = text;
                        })
            })
}

updateDisplay('vers1');

verseChoose.value = 'vers1';