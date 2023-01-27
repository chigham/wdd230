const table = document.querySelector("table");
const tableHeader = document.querySelector("thead");
const tableBody = document.querySelector("tbody");

const name_ = document.getElementById("full-name")
const email = document.getElementById("email")
const rating_ = document.getElementById("r")
const username = document.getElementById("password")

const tableName = document.getElementById("table-name");
const tableEmail = document.getElementById("table-email");
const tableRating = document.getElementById("table-rating");
const tableUsername = document.getElementById("table-username");

name_.addEventListener("input", function () {
    tableName.innerHTML = name_.value;
})

email.addEventListener("input", function () {
    tableEmail.innerHTML = email.value;
})

rating_.addEventListener("input", function () {
    tableRating.innerHTML = rating_.value;
})

username.addEventListener("input", function () {
    tableUsername.innerHTML = username.value;
})