var count = 0;

function foobar() {
	count = ++count;
	var toprint = "";
	var color = "black"
	var numprint = true;
	/* if divisible by 5 */
	if (count % 5 == 0){ 
		numprint = false;
		toprint = "bar" + toprint;
		color = "blue";
	}
	/* if divisible by 3; note that both foo and bar can be printed together */
	if (count % 3 == 0){
		/* if divisible by 15, numprint will already be false */
		if (numprint){
			color = "red";
			numprint = false;			
		}
		else{
			color = "purple";
		}
		toprint = "foo" + toprint;	
	}
	/* if indivisible by 3 and 5 */
	if (numprint){
		document.getElementById("foobar").innerHTML = document.getElementById("foobar").innerHTML 
		+ "<tr><td>" + count + "</td><td>" + count + "</td></tr>";
		return;
	}	
	document.getElementById("foobar").innerHTML = document.getElementById("foobar").innerHTML 
		+ "<tr><td>" + count + "</td><td><p class=" + color + " style=\"display:inline\">"
		+ toprint + "</p></td></tr>";
}

/* restore the list to its initial state*/
function foobar_clear() {
	count = 0;
	document.getElementById("foobar").innerHTML = 
	"<colgroup><col span=\"2\" style=\"width: 50%;\"></colgroup>"
	+ "<tr><th>Control</th><th>Experimental</th></tr>";
}