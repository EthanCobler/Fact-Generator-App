const api = "https://uselessfacts.jsph.pl/random.json?language=en";

const output = document.getElementById("fact-display")

const fetchButton = documment.getElementById("fetch-btn");

fetchButton.addEventListener("click", function() {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            output.innerText = data.text;
        });
});


// Make list of facts
let facts = [
    "Honey never spoils",
    "A day on Venus is longer than a year on Venus",
    "Bananas are berries but strawberries are not",
    "I love Naamah",
    "Giraffes tongues are black",
    "I'm struggling in school",
    "The pope can't be an organ donor",
    "Sudan has more pyramids than any other contry in the world",
    "No number before 1,000 has the vowel A",
    "Most people who have schizophrenia start to show signs or experience symptoms between 16 and 21",
    "Julia Hekking likes girls",
    "Reman is color blind",
    "Nepal's flag is the only non-rectangular flag in the world",
    "University of Utah was one of the first schools to join the internet",
    "Liverpool is washed",
    "Barcelona only has 5 champions league",
    "Arsenal has not won a champions league",
    "Arsenal is the only team to have won the premier league undefeated",
    "Arsene Wenger was so tough, people thought the club was named after him",
    "Chelsea is the only club with every European trophy"
    ]

    // Find button and tell it what to do
    let button = document.getElementById("fact-button");
    // button.addEventListener("click", showRandomFact);

    // Runs when button is clicked, from the addEventListener
    // function showRandomFact(){
    //     let randomIndex = Math.floor(Math.random() * facts.length);
    //     let randomFact = facts[randomIndex];

    //     let factAsk = document.getElementById("fact-ask");
    //     factAsk.textContent = randomFact;
    // }

    button.addEventListener("click", function(){
        let randomIndex = Math.floor(Math.random() * facts.length);
        let randomFact = facts[randomIndex];

        let factAsk = document.getElementById("fact-ask");
        factAsk.textContent = randomFact;
    })