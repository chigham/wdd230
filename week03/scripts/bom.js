const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const deleteButton = document.createElement("button");

const chapters = getChapterList() || [];

chapters.forEach(chapter => {
    displayList(chapter);
});

function getChapterList () {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
};

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', () => {
      list.removeChild(li);
      deleteChapter(li.textContent);
      input.focus();
    });
  }

function setChapterList () {
    localStorage.setItem("myFavBOMList", JSON.stringify(input.value));
};

function deleteChapter (chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapters = chapters.filter((item) => item !== chapter);
    setChapterList();
};

deleteButton.textContent = "❌";
deleteButton.setAttribute("type", "submit");
deleteButton.classList.add("delete");
button.parentNode.insertBefore(deleteButton, button.nextSibling);

button.addEventListener("click", () => {
    if (input.value != "") {
        displayList(input.value);
        chapters.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

/*deleteButton.addEventListener("click", () => {
    let lastElement = list.children[list.children.length - 1];
    list.removeChild(lastElement);
    input.focus();
});*/