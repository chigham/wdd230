function getYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

function getLastModifiedDate() {
    document.getElementById("lastModified").innerHTML = new Date(document.lastModified)
}