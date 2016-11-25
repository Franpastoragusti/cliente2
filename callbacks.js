function function1(callback){
  callback('1')
}

function1(function(texto){
  console.log('hola'+texto)
});


function fucntion2(callback1,callback2,callback3){
  callback1('hola')
  callback3('juan')
  callback2('pedro')
}

fucntion2(
  function(valor){
    console.log(valor)
  },
  function(valor){
    console.log(valor)
  },
  function(valor){
    console.log(valor)
  }
)
