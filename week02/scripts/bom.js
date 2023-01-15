const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const deleteButton = document.createElement("button");

deleteButton.textContent = "❌";
deleteButton.setAttribute("type", "submit");
deleteButton.classList.add("delete");
button.parentNode.insertBefore(deleteButton, button.nextSibling);

button.addEventListener("click", () => {
    let li = document.createElement("li");
    if (input.value != "") {
        li.appendChild(document.createTextNode(input.value));
        list.appendChild(li);
        input.value = "";
    } else {
        alert("Try again please, this time with some text.");
    }
});

deleteButton.addEventListener("click", () => {
    let lastElement = list.children[list.children.length - 1];
    list.removeChild(lastElement);
    input.focus();
});