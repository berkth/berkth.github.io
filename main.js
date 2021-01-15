function updateVP (){
	if (ItemVal = document.getElementById("vp").value == "Valuepack Activado") {
		var button = document.getElementById("vp");
		button.value= "Valuepack no Activado";
		button.style.color = '#ffffff';
		button.style.background ='#00ff00';
		button.style.backgroundImage = "url(https://berkth.github.io/img/vp-off.png)";
		button.style.backgroundRepeat = "no-repeat";
	}
	else {
		var button = document.getElementById("vp");
		button.value= "Valuepack Activado";
		button.style.color = '#000000';
		button.style.background ='#00ff00';
		button.style.backgroundImage = "url(https://berkth.github.io/img/vp-on.png)";
		button.style.backgroundRepeat = "no-repeat";
	}
}

function calculate() {
	var amountVal = parseInt(document.getElementById("AmountValue").value);
	var ItemVal = parseInt(document.getElementById("RegItemValue").value);
	var preOrderVal = parseInt(document.getElementById("PreOrderValue").value);
	if (document.getElementById('vp').value == "Valuepack Activado") {
		vp = 0.845;
	}
	else {
		vp = 0.65;
	}
	var result = 0;
	if (preOrderVal > (5*ItemVal)) {
		result = (ItemVal *2)*vp;
	}
	else if (preOrderVal < ItemVal) {
		result = ItemVal*vp;
	}
	else {
	result = (((preOrderVal - ItemVal)*0.2)+ItemVal)*vp;
	}
	result = Math.round(result * 100) / 100;
	document.getElementById('result').innerHTML = 'Profit Total: '+ amountVal * result.toFixed()+ ' Silver';
	if (preOrderVal > ItemVal) {
	document.getElementById('profit').innerHTML = 'Pre-order: ' + Math.round((result-(ItemVal*vp)).toFixed() * 100) / 100+ ' Silver';
	}
	else {
	document.getElementById('profit').innerHTML = 'Pre-order: 0'+ ' Silver';
	}
}