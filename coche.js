var margen = 0;
var coche = document.getElementById('coche');


function movement (margen) {
	margen+=20;
	coche.style.marginLeft = margen+'px';
}

setInterval(function(){movement(margen);},300)
