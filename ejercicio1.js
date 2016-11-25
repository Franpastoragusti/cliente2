

var ciudad = prompt("Dime en que ciudad quieres convalidar los creditos")

switch (ciudad.toUpperCase()) {
	case "VALENCIA":
	case "BARCELONA":
		document.write("se te convalidan 30 creditos")
		break;
	case "MADRID":
		document.write("no se convalidan creditos")
		break;
	case "SEVILLA":
	case "GRANADA":
	case "CORDOBA":
		document.write("se te convalidan 50 creditos")
		break;
	default:
		alert("la ciudad seleccionada no te convalida creditos")
		break;
}

