// JavaScript Document
function calculateGrade() {
	var table = document.getElementById("datatable");
	var length = table.rows.length;
	var i;
	var t;
	var count = 0;
	var emptyGrade;
	var emptyWeight;
	var weightScore = 0;
	var totalWeight = 0;
	var totalGrade = 0;
	for(t = 1; t < length; t++) {
		emptyGrade += document.getElementById("grade"+t).value;
		emptyWeight += document.getElementById("weight"+t).value;
	}
	for (var z = 1; z < length; z++) {
		if (document.getElementById("grade"+z).value !="" && document.getElementById("weight"+z).value != ""){
			count += document.getElementById("weight"+z).value*1;
		}
	}
	if (emptyGrade == 'undefined' && emptyWeight == 'undefined') {
		alert("Fill in Values into the table");
		return;
	}
	for (i = 1; i < length; i++) {
		if (document.getElementById("weight" + i).value < 0 || document.getElementById("grade" + i).value < 0) {
			alert("Weight and Grade Values Cannot be Negative");
			return;
		}
		if (document.getElementById("weight" + i).value >= 0 && document.getElementById("grade" + i).value == "") {
			alert("Please FIll in All Corresponding Fields");
			return;
		}
		if (document.getElementById("grade" + i).value >= 0 && document.getElementById("weight" + i).value == "") {
			alert("Please FIll in All Corresponding Fields");
			return;
		}
		weightScore += document.getElementById("grade"+i).value*document.getElementById("weight"+i).value;
		totalWeight = count;
		totalGrade = weightScore/totalWeight;
	}
	totalGrade=totalGrade.toFixed(2);
	document.getElementById("result").innerHTML = "Current Grade in Class is " + totalGrade.toString() +"%";
}