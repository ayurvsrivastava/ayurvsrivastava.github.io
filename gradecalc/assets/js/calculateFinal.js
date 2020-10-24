// JavaScript Document
function calculateFinal() {
	var finalGrade = 0;
	var current = document.getElementById("current").value;
	var need = document.getElementById("need").value;
	var percent = document.getElementById("percent").value;
	if (current < 0 || need < 0 || percent < 0) {
		alert("Values Cannot Be Negative");
		return;
	}
	if (current == "" || need == "" || percent == "") {
		alert("Please Fill in all Values");
		return;
	}
	finalGrade = ((need-current*(1-(percent/100)))/percent)*100;
	finalGrade = finalGrade.toFixed(3)
	document.getElementById("result").innerHTML = "Percent Needed on Final is " +finalGrade.toString()+ "%";
	console.log(current);
	console.log(need);
	console.log(percent);
}