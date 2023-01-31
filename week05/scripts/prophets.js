const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        fullName.innerHTML = prophet.name + " " + prophet.lastname;
        portrait.src = prophet.imageurl;
        portrait.alt = fullName.innerHTML + "'s portrait";
        portrait.loading = "lazy";
        portrait.width = "50%";
        portrait.setAttribute("height", "50%");

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
};

getProphetData();