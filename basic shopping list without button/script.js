//below 👇 is the code to add click event lister too the button

// var button = document.getElementsByTagName("button");//this will return an array of buttons
// var button = document.getElementsByTagName("button")[0];//this indicate an element of the array
// button.addEventListener("click",function(){
// 	console.log("clicked");
// })

//below👇 is the code to add something to the shopping list

var input = document.getElementById("userinput");//1-select the inputs through its id assigned
var button = document.getElementById("enter");//2-select the buttons through its id assigned
button.addEventListener("click",function(){  //3-add event listener to the button
	console.log("click is working");
	console.log(input.value);//3.6 to get whatever value is given to the input elemet created earlie above

	if(input.value.length > 0) {//3.8 to check that enter click works only when there is some value given to input element
		var li= document.createElement("li");//3.1 create a new li element
		//var node = document.createTextNode("xyz");//3.2 create a text node i.e it will print "xyz"
		var node = document.createTextNode(input.value);//3.7 create the node of whatever value is given to the input element
		li.appendChild(node);//3.3 text is made child to the li element 
		var ul = document.querySelector("ul");//3.4 select ul element
		ul.appendChild(li);//3.5 li is made  child to the ul element

		input.value="";//3.9 make input value empty string i.e erase the input value after once entered else it will keep repeating itself
	}
})

input.addEventListener("keydown",function(/*event*/){ //just pass the event as function argument , still will work even not given here
     console.log()
	//console.log(event); //to se which events have occured
	if(input.value.length > 0 && event.keyCode === 13) {
		var li= document.createElement("li");
		var node = document.createTextNode(input.value);
		li.appendChild(node);
		var ul = document.querySelector("ul");
		ul.appendChild(li);
		input.value="";
	}
})

 