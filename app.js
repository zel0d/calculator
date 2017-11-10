var calculation = document.getElementsByClassName("calculation")[0];
var result = document.getElementsByClassName("result")[0];
var container = document.getElementsByClassName("container")[0];


var containerWidth = container.offsetWidth;

result.style.fontSize = "400%";

var math = function( input ){

  if (input === "c"){
    calculation.innerHTML = "0";
    result.innerHTML = "0";
    return;
  }
  if (input == "del"){
    if (calculation.innerHTML.length >1){
      calculation.innerHTML = calculation.innerHTML.substring(0, calculation.innerHTML.length - 1);
    } else {
      calculation.innerHTML = 0;
    }
    calculate();
    return;
  }

  if (calculation.innerHTML == 0){
    calculation.innerHTML = input;
  } else {
    calculation.innerHTML += input;
  }

  if (!isNaN(input)) {
    calculate();
  }
};

var calculate = function(){
  result.innerHTML = eval(calculation.innerHTML);
  var fontSize = parseInt(result.style.fontSize);
  var resultWidth = result.offsetWidth;
  result.style.fontSize = fontSize - resultWidth/containerWidth*20 + "%";

};

var addToCalculation = function(input){
  if (calculation.innerHTML == 0){
    calculation.innerHTML = input;
  } else {
    calculation.innerHTML += input;
  }
};

window.addEventListener('keydown', function(e) {
// Enter is pressed
  if (e.keyCode == 48) {
    addToCalculation(0);
    calculate();
  }
  if(e.keyCode == 49){
    if(e.shiftKey == true){
    addToCalculation('+');
    } else {
    addToCalculation(1);
    calculate();
    }
  }
  if(e.keyCode == 50){
  addToCalculation(2);
  calculate();
  }
  if(e.keyCode == 51){
    if(e.shiftKey == true){
    addToCalculation('*');
    } else {
    addToCalculation(3);
    calculate();
    }
  }
  if(e.keyCode == 52){
  addToCalculation(4);
  calculate();
  }
  if(e.keyCode == 53){
  addToCalculation(5);
  calculate();
  }
  if(e.keyCode == 54){
  addToCalculation(6);
  calculate();
  }
  if(e.keyCode == 55){
    if(e.shiftKey == true){
    addToCalculation('/');
    } else {
    addToCalculation(7);
    calculate();
    }
  }
  if(e.keyCode == 56){
    if(e.shiftKey == true){
    addToCalculation('(');
    } else {
    addToCalculation(8);
    }
    calculate();
  }
  if(e.keyCode == 57){
    if(e.shiftKey == true){
    addToCalculation(')');
    } else {
    addToCalculation(9);
    }
    calculate();
  }
  if(e.keyCode == 189){
  addToCalculation('-');
  calculate();
  }
  if(e.keyCode == 8){
    if (calculation.innerHTML.length >1){
      calculation.innerHTML = calculation.innerHTML.substring(0, calculation.innerHTML.length - 1);
    } else {
      calculation.innerHTML = 0;
    }
    calculate();
  }
  if(e.keyCode == 46){
  calculation.innerHTML = 0;
  calculate();
  }



}, false);
