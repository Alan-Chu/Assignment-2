var score = 0; //count the totle score.

/**********************begin the test function********************************/
function beginTest() {
	//alert("press button");
	var bq = document.getElementById('blockquote');
	var h2 = document.getElementById('h2');
	var iframe = document.getElementById('iframe');
	h2.innerHTML = 'Questions';
	bq.innerHTML = '';
	iframe.style.visibility = 'visible';
	iframe.src = 'questions.html';
}

/************************submit the 1st answer*********************/
function finishFirstOne() {
	// alert('finishi');
	var radio = document.getElementsByName('fear');
	for (var i = 0; i < radio.length; i++) {
		//find the option chosen and add the score
		if (radio[i].checked) {
			return parseInt(radio[i].value);
		}
	}
	//User didn't choose, make an alert
	//alert('Please choose one option.')
	return -1;
}

/****************************submit 2nd answer**********************/
function finishSecondOne() {
	var radio = document.getElementsByName('qt');
	for (var i = 0; i < radio.length; i++) {
		//find the option chosen and add the score
		if (radio[i].checked) {
			return parseInt(radio[i].value);
		}
	}
	//User didn't choose, make an alert
	//alert('Please choose one option.')
	return -1;
}

/****************************submit 3rd answer**************************/
function finishThirdOne() {
	var radio = document.getElementsByName('word');
	for (var i = 0; i < radio.length; i++) {
		//find the option chosen and add the score
		if (radio[i].checked) {
			return parseInt(radio[i].value);
		}
	}
	//User didn't choose, make an alert
	//alert('Please choose one option.')
	return -1;
}

/***************************clear radio options******************************/
function clearRadio() {
	var radio1 = document.getElementsByName('fear');
	var radio2 = document.getElementsByName('qt');
	var radio3 = document.getElementsByName('word');
	for (var i = 0; i < radio1.length; i++) {
		radio1[i].checked = false;
	}
	for (var i = 0; i < radio2.length; i++) {
		radio2[i].checked = false;
	}
	for (var i = 0; i < radio3.length; i++) {
		radio3[i].checked = false;
	}
}

/**************************submit all******************************************/
function submitSum() {
	//alert('aaa');
	var one = finishFirstOne();
	var two = finishSecondOne();
	var three = finishThirdOne();
	var sum = 0;
	var word = '';
	if (one<0 || two<0 || three<0) {
		alert('you have one or more questions fail to answer.');
	}
	else {
		sum = one + two + three;
		// alert('total scores: ' + sum);
		if (sum<=5) {
			word = 'Your spirit color is orange' + '\n' + 
				'You\'re always open-minded and happy to make friends!';
		} else if (sum<=10) {
			word = 'Your spirit color is blue' + '\n' +
				'You\'re a clam gay, can always deal with troubles steadyly!';
		} else {
			word = 'Your spirit color is purple' + '\n' +
				'You\'re always filled with energy and passion. Just set your goal and purse it!';
		}
		clearRadio();

		var para = document.createElement("p");
		para.id = "answerId";
		if (sum<=5) para.style = 'font-style: italic; color: orange;';
		else if (sum<=10) para.style = 'font-style: italic; color: blue;';
		else para.style = 'font-style: italic; color: purple;';
		var node = document.createTextNode(word);
		para.appendChild(node);
		document.getElementById('parentDiv').appendChild(para);
	}

}

/***************************Clear Answer************************/
function clearAnswer() {
	// body...
	document.getElementById('answerId').remove();
}