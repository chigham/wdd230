let learningActivitiesList = document.getElementById("learning-activities");

const displayActivities = (data, week) => {
    data[week].forEach((activity) => {
        let li = document.createElement("li");
        let a = document.createElement("a");

        a.setAttribute("href", activity);
        a.setAttribute("target", "_blank");
        let parts = activity.split(".");
        let result = parts[0].split("/").pop();
        a.innerHTML = result;

        li.innerHTML = week.charAt(0).toUpperCase() + week.slice(1) + ": ";
        li.appendChild(a)
        learningActivitiesList.appendChild(li)
    });
};

async function getActivities () {
    let response = await fetch('json/activities.json');
    let data = await response.json();

    Object.keys(data).forEach((week) => {
        displayActivities(data, week);
    })
};

getActivities();