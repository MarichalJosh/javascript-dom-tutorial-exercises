let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let lista = document.createElement("li");
	lista.innerHTML = "Fourth element";
	let myList = document.querySelector("#myList");
	myList.appendChild(lista);
});
