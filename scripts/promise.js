let heading2 = document.querySelector('h2');

let errorDiv = document.getElementById("error");

let promise = new Promise(
    
    function(resolve, reject) {

        setTimeout(
            function() {
                // reject("Une erreur est survenue !");

                resolve("Tout ira bien pour vous !");
            }, 
            5000);
    }
);

promise.then(
            function(msg) {

                heading2.textContent = msg;
            })
        .catch(
            function(msg) {
              
                heading2.textContent = '';

                errorDiv.textContent = msg;
            });






