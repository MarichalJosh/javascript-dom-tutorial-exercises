window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	for (let i = 0; i < countries.length; i++) {
		let select = document.createElement("option");
		select.innerHTML = countries[i];
		let lista = document.querySelector("#mySelect");
		lista.appendChild(select);
	}
};
let aux = document.querySelector("#mySelect");
aux.addEventListener("change", function() {
	alert(aux.value);
});
