// JavaScript Document
function createRow() {
	var table = document.getElementById("datatable");
	var row = table.insertRow(table.rows.length);
	var grade = '<input class="gradeinput" type="number" name="classgrade" min="0" id="grade">';
	var weight = '<input class="gradeinput" type="number" name="classweight" min="0" id="weight">';
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = table.rows.length-1;
	cell2.innerHTML = grade;
	cell3.innerHTML = weight;
	var length = table.rows.length-1;
	var lengthStr = length.toString();
    document.getElementById("grade").id = "grade"+lengthStr;
	document.getElementById("weight").id = "weight"+lengthStr;
}