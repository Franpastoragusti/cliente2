/*let boton = document.getElementById("boton");
boton.onclick=function(){
  alert('has clickado');
}

boton.oncontextmenu=function(){
  alert('Has clickado en el boton derecho');
}
*/
/*
let imagenes = ['moto1.jpg', 'moto2.jpg'];

//pansando el this desde el html cogemos la imagen completa y podemos jugar
function cambiarImagen(imagen){
  imagen.src=imagenes[0];
}

//emn document.images tenemos todas las imagenes del document
function restaurarImagen(){
  document.images['imagen'].src=imagenes[1];
}
*/

/*
let imagen = document.getElementById('imagen')
let x=0, y=0;
document.addEventListener('mousemove', movimientoImagen);

function movimientoImagen(e){
  //en funcion del raton se movera la imagen
  x=e.pageX;
  y=e.pageY;
  imagen.style.position="absolute";
  imagen.style.left= x+"px";
  imagen.style.top= y+"px";
  console.log("X: " + x + "Y: " + y);
}

document.onmousemove = movimientoRaton;
*/

/*

let x=0, y=0;
function movimientoRaton(e){
  x=e.pageX;//tambien clientX y clientY centrado en la ventana activa
  y=e.pageY;
  console.log("X: " + x + "Y: " + y);
}

document.onmousemove = movimientoRaton;
*/

let imagen = document.getElementById('imagen')

document.addEventListener('keydown', moverTeclado);

let x = 0;
let y = 0;

function moverTeclado(e){

  imagen.style.position="absolute";

  e.preventDefault();//quita efectos de eventos

  let evento = window.event || e;

  switch (evento.keyCode) {
    case 37://izqierda
      x-=10;
      imagen.style.left= x+"px";
      break;
    case 38://arriba
      y-=10;
      imagen.style.top= y+"px";
      break;
    case 39://derecha
      x+=10;
       imagen.style.left= x+"px";
      break;
    case 40://abajo
      y+=10;
       imagen.style.top= y+"px";
      break;
    default:
  }
    console.log("X: " + x + "Y: " + y);

}
