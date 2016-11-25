var fibonacci = 1;
var num = parseInt(prompt("Busquemos un numero en la secuencia de fibonacci"))
var anterior = 0;
var siguiente;
for(var i = 1; i < num; i++){
	siguiente = fibonacci + anterior;
	anterior = fibonacci;
	fibonacci = siguiente;
}

alert("la posicion indicada corresponde con el numero: "+ fibonacci);