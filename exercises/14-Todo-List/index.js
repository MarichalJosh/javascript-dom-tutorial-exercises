// Your code here
let add = document.querySelector("#addToDo");
add.addEventListener("keyup", function(e) {
	if (e.keyCode === 13) {
		var tarea = document.createElement("li");
		tarea.innerHTML = `<span><i class="fa fa-trash"></i>${add.value}</span>`;
		var myList = document.querySelector("ul");
		myList.appendChild(tarea);

		tarea.addEventListener("click", function() {
			let todos = document.querySelectorAll("ul");
			todos[0].removeChild(todos);
		});
	}
});
