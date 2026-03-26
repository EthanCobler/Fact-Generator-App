const api = "https://uselessfacts.jsph.pl/random.json?language=en";

fetch(api)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    });


