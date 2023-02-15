function getYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

function getLastModifiedDate() {
    let fullDate = new Date(document.lastModified);
    let monthInt = fullDate.getMonth();
    let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][monthInt];
    let day = fullDate.getDate();
    let year = fullDate.getFullYear();
    document.getElementById("lastModified").innerHTML = "Last Modified " + monthName + " " + day + ", " + year; //new Date(document.lastModified)
}

function shareLastvisitDate() {
    let lastVisited = document.getElementById("last-visited");

    if (localStorage.getItem("lastVisit")) {
        let lastVisitDate = new Date(localStorage.getItem("lastVisit"));
        let currentVisitDate = new Date();

        let timeDifference = Math.abs(currentVisitDate - lastVisitDate);
        let daysDifferent = Math.ceil(timeDifference / 1000 / 3600 / 24);

        lastVisited.innerHTML = "You last visited this page " + daysDifferent + " days ago.";
    } else {
        lastVisited.innerHTML = "Welcome! This is your first visit to this page.";
        localStorage.setItem("lastVisit", new Date());
    }
}

function setDateTime() {
    let date = new Date();
    let dateTime = date.toString();
    document.getElementById("form-date-time").value = dateTime;
}