/*
--------------------------------------------------------------------------
---------------------------------BUCLES-----------------------------------
--------------------------------------------------------------------------


###################FOR##############################

var edad = parseInt(prompt("dime un numero"))

for(; edad >= 0; edad--){

	document.write(edad)

}
###################FOR IN##############################

var coche1 = new Coche('renault', 'megane', 'azul');
var mensaje = '';
for (propiedad in coche1) {
	mensaje+=propiedad + '<br>';
}
###################WHILE##############################

var edad = parseInt(prompt("dime un numero"))

while(num < 10){

	document.write(edad)
	num ++
}

--------------------------------------------------------------------------
---------------------------FUNCIONES INTEGRAS DE JS-----------------------
--------------------------------------------------------------------------
eval("2*4")-->realiza la operacion de dentro de la cadena


typeOf()-->sacar el tipo

coche1 instanceof Coche2 --> Comprueba si coche1(objeto) es de la clase Coche2 true/false


marca in coche1 --> Comprobar si ese atributo está en el objeto

setInterval("saludo()", 3000)--> ejecuta una funcion cada Xtiempo

		var cont = 0;
		function saludo () {
			alert('hola');
			cont++
			if (cont==4) {
				clearInterval(intervalo);
			}
		}

		var intervalo = setInterval("saludo()", 2000)

funciones anonimas
#############autoejecutables###########
(function () {
	document.write("hola")
}());
.................................................
(function (param1,param2) {
	document.write(param1+param2)
}(2,4));
.........................................
function saludar () {
	return function(){
       console.log("hola");
	}
}

saludar()();
.............................
function f1(num1){
	function f2(num2){
		function f3(num3){
			console.log(num1+num2+num3);
		}
		f3(12);
	}
	f2(45);
}
f1(1);
...............................

--------------------------------------------------------------------------
-----------------------------CONDICIONALES--------------------------------
-------------------------------------------------------------------------- 
########################EVALUADOR TERNARIO###################
	divisor!=0 ? (una cosa, otra):(error);


#######################SWICH#################################
var num = prompt("dame un numero del uno al cuatro")
numero = parseInt(num)
switch (numero) {
	case 1:
		document.bgColor='red'
		break;
	case 2:
		document.bgColor='blue'
		break;
	case 3:
		document.bgColor='green'
		break;
	case 4:
		document.bgColor='yellow'
		break;
	default:
		alert("no ha sido un numero entre el 1 y el 4")
		break
}

--------------------------------------------------------
--------------oBJETOS PREDEFINIDOS----------------------
--------------------------------------------------------

#################MATH############################


.round()//redondea hacia arriba o hacia abajo
.floor()//redondea hacia abajo siempre
.ceil()//redondea hacia arriba siempre
.sqrt()//raiz cuadrada
.pow(base,exponente)//potencia



###################STRING###########################

.split('caracter')//separa una cadena en un array partido por el caracter
.toUpperCase()//Mayusculas
.toLowerCase()//Minusculas
.localeCompare(string2)//comparar alfabeticamente las cadenas 
.indexOf(string2)//busca string2 en la string devolviendo el numero de caracter en el que comienza 
.substring(empieza,acaba)//crear subcadenas
.slice(empieza,acaba)//crar subcadenas
.substr(empieza,numcaracteresacojer)//crear substrings
.lastIndexOf(string2)//busca string2 en la string devolviendo el mumero de caracter en el que comienza pero empieza a buscar por la cola
.lenght()
.trim()//elimina espacios del comienzo y del final de la cadena
.charAt(num)//coje un caracter concreto

#####################NAVIGATOR####################

.appName//navegador
.appVersion)//version de navegador
.platform)//sistema operativo
.userAgent)//detallado

####################SCREEN##########################

.width//ancho del screen
.height//altura del screen
.availWidth//ancho disponible
.colorDepth//cantidad de colores que soporta tu monitor
.pixelDepth//resolucion de pantalla



--------------------------------------------------------------------------
---------------------------FUNCIONES DE OBJETOS-----------------------
--------------------------------------------------------------------------

######################CREAR OBJETOS########################
function Coche (marca,modelo,color) {
	//atributos
	this.marca = marca;
	this.modelo = modelo;
	this.color = color;
	//metodos
	this.arrancar = function(){
		alert("arrancando motores...");
	}
	this.acelerar = arrancarConVelocidad;
	//////normalmente te preparas librerias que requieres antes de empezar el constructor y 
}

##############INSTANCE OF##################

coche1 instanceof Coche2 --> Comprueba si coche1(objeto) es de la clase Coche2 true/false

################# IN ######################

marca in coche1 --> Comprobar si ese atributo está en el objeto

###############EXTENDER####################
//Añadir atributos y metodos despues de haber creado ya el constructor.
Coche.prototype.color='rojo'


##############HERENCIAS#######################
function Persona (nombre, apellidos) {
	//atributos
	this.nombre = nombre;
	this.apellidos = apellidos;
}

function Persona (nombre, apellidos, sueldo) {
	Persona.call(this, nombre, apellidos);
	this.sueldo = sueldo;
	
}

--------------------------------------------------------------------------
---------------------------FUNCIONES DE ARRAYS-----------------------
--------------------------------------------------------------------------

array.join(',')--> transofrma un array en un string separado por lo que le indiques
array.pop()--> quitar de un array el ultimo elemento
array.push(variable)--> añade variable a la ultima posicion de un array
array.reverse()--> invertir el array
array.shift()--> eliminar el primer elemento
array.unshift(variable)--> añade la variable al comienzo del array
array.sort()-->ordena el array

array.forEach((item) => {
           console.log(item)
});

array.forEach(function(item,index,array)){
	console.log(index,item)
});
