let learningActivitiesList = document.getElementById("learning-activities");

const displayActivities = (week) => {
    week.forEach((activity) => {
        let li = document.createElement("li");
        let a = document.createElement("a");

        a.setAttribute("href", activity);
        a.setAttribute("target", "_blank");
        let parts = activity.split(".");
        let result = parts[0].split("/").pop();
        a.innerHTML = result;

        li.innerHTML = Object.keys(week)[0] + ": ";
        console.log(li.innerHTML);

        portrait.src = prophet.imageurl;
        portrait.alt = fullName.innerHTML + "'s portrait";
        portrait.loading = "lazy";
        portrait.setAttribute("width", "150px");
        portrait.setAttribute("height", "200px");

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};

async function getActivities () {
    const response = await fetch('activities.json');
    let data = await response.json();
    //console.table(data.prophets);

    Object.keys(data).forEach((week) => {
        //displayActivities(week);
        console.log(week);
    })
};

getActivities();