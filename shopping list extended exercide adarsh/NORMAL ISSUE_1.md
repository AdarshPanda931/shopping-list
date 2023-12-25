## issue 1 - what is the difference between (appendChild) and (append) in js

## solution👉
In JavaScript, both appendChild and append are methods used to add elements to the DOM (Document Object Model), but they have some differences in terms of usage and functionality.

1. appendChild method:

appendChild is an older method that has been around for a long time.
It is used to append a node as the last child of a specified parent node.
It takes a single argument, which is the node to be appended
```
var parent = document.getElementById("parentElement");
var child = document.createElement("div");
parent.appendChild(child);

```
2. append method:

append is a newer method introduced in the DOM specification, and it provides a more flexible way to add multiple nodes at once.
It can take multiple arguments, and it appends all of them to the specified parent element. It also allows you to append strings, nodes, or a combination of both
```
var parent = document.getElementById("parentElement");
var child1 = document.createElement("div");
var child2 = document.createElement("p");

// Using append with multiple arguments
parent.append(child1, child2);
```
The append method is more versatile than appendChild and is generally preferred for its concise syntax and additional capabilities.

### In summary, while appendChild is specifically designed to add a single node as the last child of a parent node, append is more versatile, allowing you to add multiple nodes and various types of content to a parent element in one go.
