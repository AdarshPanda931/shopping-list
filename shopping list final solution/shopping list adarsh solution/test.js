var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var doneButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    li.appendChild(document.createTextNode(input.value));

    doneButton.appendChild(document.createTextNode("Done"));
    doneButton.addEventListener("click", function () {
        li.classList.toggle("done");
    });

    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.addEventListener("click", function () {
        ul.removeChild(li);
    });

    li.appendChild(doneButton);
    li.appendChild(deleteButton);
    ul.appendChild(li);

    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
