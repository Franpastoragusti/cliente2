var valor = Math.floor(Math.random()* 100) + 1;
var cont = 0;
var flag = false;

do{

	var usuario = prompt("Adivina el numero o escribe FIN para abortar<br>");
	var regex = /([fF][iI][nN])/;
	
	//comprobamos que lo insertado no es == fin
	if (usuario.match(regex)) {
		document.write('Has abortado el proceso<br>')
		//salimos del bucle
		flag = true

	}else{
		usuario = parseInt(usuario);
	}

	if (usuario > valor) {
		document.write('El numero '+ usuario +' es mayor que el aleatorio<br>')

	}else if (usuario < valor) {
		document.write('El numero '+ usuario +' es menor que el aleatorio<br>')

	}else if (usuario == valor) {
		document.write('Has acertado');

	}else{
		alert('no has insertado un numero')

	}

	cont+=1

	if (usuario == valor) {
		//salimos del bucle
		flag = true
	}
	
} while (flag == false);

document.write('has terminado en el intento '+ cont)

