/*let mensaje1 = "hola";
let referencia;
  function f1 (){
    let mensaje2= "hola2";
    function f2 (){
      console.log("mensaje1 " + mensaje1);
      console.log("mensaje2 " + mensaje2);
    }
  f2()
  referencia=f2;
  }
f1();
referencia();

for (var i = 1; i <=5; i++) {
  setTimeout(function(){
    console.log(i)
  },2000)
}*/
//como la funcion setTimeout se ejecuta cada dos segundos marca su tiempo y se convierte en asincrona y como el for es secuencial
/*
for (var i = 1; i <=5; i++) {
  (function(variable){
    setTimeout(function(){
      console.log(variable)
    },i*2000);
  })(i);

}

function cont(){
  let contador = 0;
  function suma(){
    contador++;
  }
  suma();
  console.log("contador"+contador);
}
cont();
cont();
cont();
*/
//CLOUSURE-->Es como si preguntase si la variable existe o no, si no existe(es decir la primera llamada) la inicializa, sino continua con el valor de antes.
/*var function2 =(function(){
  let contador = 0;
  return function(){
    contador++;
    console.log("contador"+contador);
  }
})();

function2();
function2();
function2();
*/
