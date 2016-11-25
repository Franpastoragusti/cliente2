var cadena = "hola mundo";
cadena = cadena.toString();
var long = cadena.length;
var cadena2 = "";
for(var i = 0 ; i < long; i++){
	var posicion =cadena.indexOf(cadena[i]);
	if (cadena[i]=='a'||cadena[i]=='i'||cadena[i]=='e'||cadena[i]=='u'||cadena[i]=='o') {
		var nuevaLetra=cadena[i].toUpperCase();
	}else{
		var nuevaLetra = cadena[i];
	}
	cadena2+=nuevaLetra;
}

console.log(cadena2);
