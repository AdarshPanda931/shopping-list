var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");

    var TextNode = document.createTextNode(input.value);
    li.appendChild(TextNode);

    var ul = document.querySelector("ul");
    //ul.appendChild(li);

    //2.Added a delete button (deleteButton) for each list item (li).
    var deleteButton = document.createElement("button");
    var delNode = document.createTextNode("Delete");
    deleteButton.appendChild(delNode);

    li.append(deleteButton);

    //3. adding done button
    var doneButton = document.createElement("button");
    var doneNode = document.createTextNode("done");
    doneButton.appendChild(doneNode);
    
    li.append(doneButton);

    ul.append(li);

    
    input.value = "";

    // 1. Add click event listener to toggle the 'done' class on and off
    //Now, when you click on a list item, it should toggle the .done class, visually indicating that the item is marked as done or not done.
    li.addEventListener("click", function () {
        li.classList.toggle("done");
    });

    // Add click event listener to delete the list item
    deleteButton.addEventListener("click", function () {
        ul.removeChild(li);
    });

    //add click event for done button
    doneButton.addEventListener("click", function () {
        li.classList.toggle("done");
    });
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


// Add delete buttons to existing list items

// var existingListItems = document.querySelectorAll("ul li");
// existingListItems.forEach(function (item) {
//     var deleteButton = document.createElement("button");
//     deleteButton.appendChild(document.createTextNode("Delete"));
//     item.appendChild(deleteButton);

//     deleteButton.addEventListener("click", function () {
//         ul.removeChild(item);
//     });
// });

//OR

// for (var i = 0; i < existingListItems.length; i++) {
//     let item = existingListItems[i];//✅
//     //var item = existingListItems[i];❎

//     var deleteButton = document.createElement("button");
//     deleteButton.appendChild(document.createTextNode("Delete"));
//     item.appendChild(deleteButton);

//     deleteButton.addEventListener("click", function () {
//         ul.removeChild(item);
//     });
// }

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
