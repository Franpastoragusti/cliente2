
var result;
var seguir = true;
while (seguir) {
	var num1 = parseInt(prompt("dame un numero"));
	var num2 = parseInt(prompt("dame otro numero"));
	var symbol = prompt("dime que operacion hacer");
	switch (symbol) {
		case "+":
			result = num1+num2;
			break;
		case "-":
			result = num1-num2;
			break;
		case "*":
			result = num1*num2;
			break;
		case "/":
			result = num1/num2;
			break;
		default:
			alert("no has escrito un simbolo valido");
			break;
	}
	console.log(num1+num2+symbol+seguir);
	alert("El resultado de la operacion ha sido "+result);
	seguir=confirm("¿Quere repetir?");
}
