var cadena = "hm4xls2mrt5";
var suma = 0;
for(var i = 0 ; i < cadena.length; i++){
	var num = parseInt(cadena[i])
	if (!isNaN(num)) {
		suma+=num;
	}
}

console.log(suma);

