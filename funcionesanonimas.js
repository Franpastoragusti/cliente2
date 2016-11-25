var texto = document.getElementById('areadetexto');
var contador = document.getElementById('contador')
console.log(texto)
cont=0;

function twitter (texto) {
	if (cont == 20) {
		texto.substring(20,1000)
		
	}
	cont++;
	console.log(cont);

}
