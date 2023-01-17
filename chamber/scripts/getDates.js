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

getYear();getLastModifiedDate()