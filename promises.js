/*var promise=new Promise(function(resolve,reject){

    const FLAG = 5;

    if (FLAG == 5){
      resolve('OK')
    }else {
      reject('KO')
    }

});

promise.then(function(response){
    console.log(response);
},function(reject){
    console.log(reject);
});






function esperar(){
  return new Promise(function(response,reject){
    setTimeout(function(){
      response('OK');
    },2000);
  });
};

esperar().then(function(valor){
    console.log(valor)
}).then(function(){
    throw "Error";
}).then(function(){
  setTimeout(function(){
    console.log('2OK')
  },2000);
}).catch(function(error){
  console.log(error);
});
*/


var promesa1 = function(){
  return new Promise(function(response,reject){
    setTimeout(function(){
      console.log("1 segundo");
      response();
    },1000);
  });
};


var promesa3 = function(valor){
  return new Promise(function(response,reject){
    if (valor==1) {
      setTimeout(function(){
        console.log("3 segundo");
        response();
      },3000);
    }else if(valor==2) {
      setTimeout(function(){
        console.log("1 segundo");
        response();
      },1000);
    }else{
      reject('KO');
    };
});

promesa3(1).then(promesa1).then(function(){
  console.log('Fin');
}).catch(function(error){
  console.log(error);
});
