const api = "https://uselessfacts.jsph.pl/random.json?language=en";

fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });


const output = document.getElementById(output)

fetch(api)
    .then(response => response.json())
    .then(data => {
        output.innerText = data.fact
    })