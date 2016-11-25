
var image = document.getElementById('imagen');
var cont = 1;
console.log(image);
function contador () {
	image.src='./imagenesNumeros/'+cont+'.png';
	cont++
	if (cont == 11) {
		cont = 1
	}
}

var intervalo = setInterval("contador()", 1000)

