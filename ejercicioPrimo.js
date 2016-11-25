var num = prompt("dame un numero para saber si es primo")
var cont=true;
for(var i = 2 ; i < num ; i++){

	if (num%i==0) {
		cont = false
	}
}

if (cont) {
	alert("el numero es primo")
}else{
	alert("el numero no es primo")
}