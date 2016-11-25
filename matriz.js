var matriz = new Array();

matriz[0] = new Array(1,2,3) 
matriz[1] = new Array(4,5,6) 
matriz[2] = new Array(7,8,9) 


matriz.forEach((fila) => {
    fila.forEach( (columna) => {
        document.write(columna+" ")
    });
    document.write("<br>")
});

for(var i = 0; i < matriz.length; i++){

	for(var e = 0; e < matriz[i].length; e++){
		document.write(matriz[i][e]+" ")
	}
	document.write('<br>')
}