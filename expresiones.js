//Validar una dacena de 1-20 caracteres-->var regex = new RegExp("^[a-zA-z0-9]{1,20}$")
//Validar DNI por debajo de 6000000-->	var regex = new RegExp("^[0-5]{1}[0-9]{7}-[A-Z]$")
//var regex = /^\d{3}\s\d{2}\s\d{2}\s\d{2}$/'999 99 99 99'
//	var regex = /^\(\d{3}\)\s\d{6}$/-->'(999) 999999'
// var regex = /^([01]\d|2[0-3])(:[0-5]{1}\d){2}$/-->Validar hora

function esValido (cadena) {
	var regex = new RegExp("^[0-2]{1}[0-3]{}[0-9]{7}-[A-Z]$")
	if (regex.test(cadena)) {
		return cadena + " OK";
	}else {
		return cadena + " KO";
	}
}

function validarTelefono (cadena) {
	var regex = /^\w*@\w\.com$/
	if (regex.test(cadena)) {
		return cadena + " OK";
	}else {
		return cadena + " KO";
	}
}


document.write(validarTelefono('15:43:55'))