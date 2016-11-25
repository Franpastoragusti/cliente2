var num1 = prompt("dame un numero")
var num2 = prompt("dame otro numero")
var symbol = prompt("dime que operacion hacer")
var result;
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
		alert("no has escrito un simbolo valido")
		break;
}
document.write("El resultado de la operacion ha sido "+result)