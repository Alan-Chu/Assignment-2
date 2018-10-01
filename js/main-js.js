function getTime() {
	// show current time and hint
	var mydate = new Date();
	var y = mydate.getFullYear();
	var month = mydate.getMonth()+1;
	var d = mydate.getDate();
	var h = mydate.getHours();
	var m = mydate.getMinutes();
	var s = mydate.getSeconds();

	var div = document.getElementById('time');
	div.innerHTML = month+"/"+d+"/"+y+"<br>"+h+":"+m+":"+s+"<br>";
	setTimeout('getTime()',500);

	// set the hint
	if (h>=23 || h<=6) {
		div.innerHTML += "Time To Go Bed!";
	} else if (h>6 && h<=12) {
		div.innerHTML += "Good Morning!";
	} else if (h>12 && h<=18) {
		div.innerHTML += "Good Afternoon!";
	} else {
		div.innerHTML += "Good Night!";
	}
}