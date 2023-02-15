const spotlightSection = document.getElementById("spotlight-section");

const jsonUrl = "data/members.json";

async function getAdvertisements() {
    let response = await fetch(jsonUrl);
    let data = await response.json();
    const goldOrSilverMembers = data.members.filter(member => member.membership === "gold" || member.membership === "silver");
    const randomMembers = [];

    // Randomly select 2 gold or silver members to display
    while (randomMembers.length < 3) {
        const randomIndex = Math.floor(Math.random() * goldOrSilverMembers.length);
        const randomMember = goldOrSilverMembers[randomIndex];
        if (!randomMembers.includes(randomMember)) {
            randomMembers.push(randomMember);
        };
    };

    displayAd(randomMembers[0]);
    displayAd(randomMembers[1]);
    displayAd(randomMembers[2]);
};

function displayAd(member) {
    let ad = document.createElement("section");
    let div = document.createElement("div");
    let img = document.createElement("img");

    // configure and style elements
    ad.classList.add("card");
    ad.classList.add("member-" + member.membership);
    div.innerHTML = member.name + "<br>" + member.advertisement;
    img.src = member.icon;
    img.alt = member.name + " image";

    // add the new elements
    ad.appendChild(div);
    ad.appendChild(img);
    spotlightSection.appendChild(ad);
};

getAdvertisements();