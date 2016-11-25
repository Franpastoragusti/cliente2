var matriz = []
for(var i = 0; i < 20; i++){
	matriz[i]=[];
	for(var e = 0; e < 20; e++){
		var valor = 0;
		if (i==e) {
			valor = 1;
		}
		matriz[i].push(valor);

	}
	
}


for(var i = 0; i < matriz.length; i++){

	for(var e = 0; e < matriz[i].length; e++){
		document.write(matriz[i][e]+" ")
	}
	document.write('<br>')
}