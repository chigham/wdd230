const main = document.querySelector("main");
const JSON = "data/members.json";

const toggler = document.querySelector("#toggler");
const toggleGrid = document.querySelector("#toggle-grid");
const toggleList = document.querySelector("#toggle-list");

async function getMembers() {
    let response = await fetch(JSON);
    let data = await response.json();
    displayMembers(data);
}

function displayMembers(data) {
    //console.log(data.members[0]);
    data.members.forEach((member) => {
        let card = document.createElement("section");

        let logoDiv = document.createElement("div");
        let a = document.createElement("a");
        let img = document.createElement("img");

        let nameDiv = document.createElement("div");
        let aNameDivWebsite = document.createElement("a");
        let addressDiv = document.createElement("div");
        let phoneDiv = document.createElement("div");

        // add image
        a.href = member.website;
        a.target = "_blank";
        img.src = member.icon;
        img.alt = member.name;
        a.appendChild(img);
        logoDiv.appendChild(a);
        card.append(logoDiv);
        
        // set the card text
        // Member name and website hyperlink
        aNameDivWebsite.innerHTML = member.name;
        aNameDivWebsite.href = member.website;
        nameDiv.appendChild(aNameDivWebsite);
        
        // Address
        addressDiv.innerHTML = member.address.replace("Maryland", "MD");
        addressDiv.innerHTML = addressDiv.innerHTML.split(",").slice(0, 2).join(",<br>") + "," + addressDiv.innerHTML.split(",").slice(2).join(",")

        // Phone and Fax
        member["phone-numbers"].forEach((number) => {
            let keys = Object.keys(number);
            keys.forEach((key) => {
                let phoneNumber = number[key];
                let formattedNumber = "(" + phoneNumber.slice(0, 3) + ")" + phoneNumber.slice(3, 6) + "-" + phoneNumber.slice(6);
                if (phoneDiv.innerHTML == "") {
                    phoneDiv.innerHTML = key + ": " + formattedNumber;
                } else {
                    phoneDiv.innerHTML = phoneDiv.innerHTML + "<br>" + key + ": " + formattedNumber;
                };
            });
        });


        //card.innerHTML = card.innerHTML + "hi friends";
        card.appendChild(nameDiv);
        card.appendChild(addressDiv);
        card.appendChild(phoneDiv);
        
        
        // set the background color
        card.setAttribute("class", "card member-" + member.membership);

        main.appendChild(card);
    });
}

toggler.addEventListener("click", () => {
    toggleGrid.classList.toggle("toggle-active");
    toggleList.classList.toggle("toggle-active");
    toggleGrid.classList.toggle("toggle-inactive");
    toggleList.classList.toggle("toggle-inactive");
    main.classList.toggle("main-toggle-list");
});


getMembers();