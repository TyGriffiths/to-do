var toDo = [];


function listButton() {
	var listInput = document.getElementById("list-entry");
	var inputValues = listInput.value;
	if (inputValues !== "") {
		var makeList = document.getElementById("generate-list");
		var separateList = inputValues.split(',');
		for (var i = 0; i < separateList.length; i++) {
		var listElements = document.createElement("li");
		listElements.innerHTML = separateList[i];
		listElements.addEventListener("click", function(event) {
			if (event.target.classList.contains("strike-through")) {
				var undoClass = event.target.classList.remove("strike-through");
			}
			else {
			var clickedElement = event.target.className += " strike-through";
		}
		})
		makeList.appendChild(listElements);	
		}
	}
	else {
		alert("Please type your to-do list into the empty field and separate items with a comma.");
	}
	listInput.value = "";
}

//add onclick to created li 
//