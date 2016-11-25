
function mAscpects(mSymbol){
  switch (mSymbol) {
    case 'ms':
      msValue = document.getElementById('texto').value;
      break;
    case 'mr':
        document.getElementById('texto').value= msValue;
      break;
    case 'mc':
        document.getElementById('texto').value= '';
      break;
  }
}

function addNumberToInput(newNum){
  let actualValue = document.getElementById('texto').value;
  let futureValue = actualValue.toString()+newNum.toString();
  document.getElementById('texto').value=futureValue;
}
function writeDot(){
  let actualValue = document.getElementById('texto').value;
  let futureValue = actualValue.toString()+".";
  document.getElementById('texto').value=futureValue;
}
function clearInput(){
  document.getElementById('texto').value= '';
}

function getValueInGlobalScope(operator){
  pastValueInGlobal = parseFloat(document.getElementById('texto').value);
  futureOperator=operator;
  document.getElementById('texto').value= '';
}

function doTheOperation(){
  let actualValue = parseFloat(document.getElementById('texto').value);
  var futureVal;
  switch (futureOperator) {
    case '+':
      futureVal = pastValueInGlobal + actualValue;
      document.getElementById('texto').value= futureVal;
      break;
    case '-':
      futureVal = pastValueInGlobal - actualValue;
      document.getElementById('texto').value= futureVal;
      break;
    case '*':
      futureVal = pastValueInGlobal * actualValue;
      document.getElementById('texto').value= futureVal;
      break;
    case '/':
      futureVal = pastValueInGlobal / actualValue;
      document.getElementById('texto').value= futureVal;
      break;

    }
  }
function complexOperation(operation){
  let actualValue = parseFloat(document.getElementById('texto').value);
  switch (operation) {

    case 'sqrt':
      futureVal = Math.sqrt(actualValue);
      document.getElementById('texto').value= futureVal;
      break;
    case 'cos':
      futureVal = Math.cos(actualValue);
      document.getElementById('texto').value= futureVal;
      break;
    case 'sin':
      futureVal = Math.sin(actualValue);
      document.getElementById('texto').value= futureVal;
      break;
    case 'log':
      futureVal = Math.log(actualValue);
      document.getElementById('texto').value= futureVal;
      break;
    case 'tan':
      futureVal = Math.tan(actualValue);
      document.getElementById('texto').value= futureVal;
      break;
    case 'exp':
      futureVal = Math.exp(actualValue);
      document.getElementById('texto').value= futureVal;
      break;
  }

}
