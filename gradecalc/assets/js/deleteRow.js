// JavaScript Document
function deleteRow() {
	var table = document.getElementById("datatable");
	document.getElementById("datatable").deleteRow(table.rows.length-1);
}