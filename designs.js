let table = document.getElementById("pixelCanvas");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
let size = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

color.addEventListener("click", function() {});

size.onsubmit = function(action) {
	action.preventDefault();
	clearGrid();
	makeGrid();
};

function makeGrid() {
	for(let r=0; r<height.value; r++) { 	
		const row = table.insertRow(r);
		for(let c=0;c<width.value; c++) {
			const column = row.insertCell(c);
			column.addEventListener("click", fillSquare);
		}
	}
}

function fillSquare() {
	this.setAttribute("style", `background-color: ${color.value}`);
}

function clearGrid() {	
	while (table.firstChild){
         table.removeChild(table.firstChild);	
	}
}




