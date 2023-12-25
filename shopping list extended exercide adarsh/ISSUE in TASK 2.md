## while adding delete feature to new and existing list items , I found the difference between (var) & (let)

### task 2 👉 Add buttons next to each list item to delete the item when clicked on its corresponding delete button. ensure that the delete buttons are added to both newly created list items and existing ones

```
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var deleteButton = document.createElement("button");

    li.appendChild(document.createTextNode(input.value));
    deleteButton.appendChild(document.createTextNode("Delete"));

    li.appendChild(deleteButton);
    ul.appendChild(li);

    input.value = "";

    // Add click event listener to toggle the 'done' class on and off
    li.addEventListener("click", function () {
        li.classList.toggle("done");
    });

    // Add click event listener to delete the list item
    deleteButton.addEventListener("click", function () {
        ul.removeChild(li);
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
var existingListItems = document.querySelectorAll("ul li");
existingListItems.forEach(function (item) {
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    item.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
        ul.removeChild(item);
    });
});

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

```
Changes made:

1.Added a delete button (deleteButton) for each new and existing list item.
2.Added a click event listener to the delete button to remove the corresponding list item when clicked.

## CURIOSITY 👇

INSTEAD OF (forEach) in the above code would we use normal (for) loop

## yes 👇
```
for (var i = 0; i < existingListItems.length; i++) {
    var item = existingListItems[i];

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    item.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
        ul.removeChild(item);
    });
}

```
### ISSUE 👉 

THIS CODE 👇
```
for (var i = 0; i < existingListItems.length; i++) {
    var item = existingListItems[i];

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    item.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
        ul.removeChild(item);
    });
}
```
IS NOT WORKING SAME AS THIS CODE 👇
```
existingListItems.forEach(function (item) {
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    item.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
        ul.removeChild(item);
    });
});
```
### SOLUTION 👇  (use LET instead of VAR)
The issue you're facing is related to the scoping of the item variable inside the event listener function. In the first example with the for loop, the item variable is declared using var, which has function-level scope. This means that there is a single item variable shared across all iterations of the loop.

In the second example with forEach, the item variable is implicitly scoped to the callback function provided to forEach, which creates a new scope for each iteration. This allows each event listener closure to capture the correct value of item for its corresponding iteration.

To fix the issue in the for loop version, you can use the let keyword instead of var to declare the item variable. The let keyword has block-level scope, which means a new item variable is created for each iteration:

```
for (var i = 0; i < existingListItems.length; i++) {
    let item = existingListItems[i];  // Use 'let' instead of 'var'

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    item.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
        ul.removeChild(item);
    });
}

```

By making this change, the scoping issue should be resolved, and the for loop version should work similarly to the forEach version.

