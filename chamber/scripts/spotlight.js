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
    let a = document.createElement("a");
    let img = document.createElement("img");

    // configure and style elements
    ad.classList.add("card");
    ad.classList.add("member-" + member.membership);
    a.href = member.website;
    a.innerHTML = member.name;
    div.innerHTML = "<br>" + member.advertisement + "<br>" + member.membership.charAt(0).toUpperCase() + member.membership.slice(1) + " member";
    img.src = member.icon;
    img.alt = member.name + " image";

    // add the new elements
    div.insertBefore(a, div.firstChild);
    ad.appendChild(div);
    ad.appendChild(img);
    spotlightSection.appendChild(ad);
};

getAdvertisements();