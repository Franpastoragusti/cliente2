//objetos de un solo uso
var miobjeto ={nombre:'Pepe', edad:37, mostrarNombre:function(){alert('Tu nombre es'+this.nombre)}};


function arrancarConVelocidad (velocidad){
	alert("arrancando motores..."+velocidad);
}

function Coche (marca,modelo,color) {
	//atributos
	this.marca = marca;
	this.modelo = modelo;
	this.color = color;
	//metodos
	this.arrancar = function(){
		alert("arrancando motores...");
	};
	this.acelerar = arrancarConVelocidad;
	//////normalmente te preparas librerias que requieres antes de empezar el constructor y 
};

function Persona (nombre, apellidos) {
	//atributos
	this.nombre = nombre;
	this.apellidos = apellidos;
};

function Empleado (nombre, apellidos, sueldo) {
	Persona.call(this, nombre, apellidos)
	this.sueldo = sueldo;
};
class Perro extends Persona{
	constructor(nombre,apellidos, sueldo){
		super(nombre, apellidos);
		this.sueldo = sueldo;
	};
};



var persona1 = new Empleado('Jesus', 'perez', 5000)
console.log(persona1 instanceof Persona)

/*
var coche1 = new Coche('renault', 'megane', 'azul');
var coche2 = new Coche('citroen', 'xsara', 'verde');

console.log(coche1.marca);
console.log(coche2.modelo);
coche1.acelerar('500km');

var mensaje='';

for (propiedad in coche1) {
	mensaje+=propiedad + '<br>';
}

document.write(mensaje);

*/