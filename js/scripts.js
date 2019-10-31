var numerals = ["I", "V", "X", "L", "C", "D", "M"];
var stringArray = [];

// function romanize (number) {
//
//   ones(number);
//   tens(number);
//   hundreds(number);
//   thousands(number);
//
//   return stringArray.join();
// }

function ones (number) {
  if(number <=3){
    for(i=0; i < number; i++){
      stringArray.push(numerals[0]);
    }
  } else if (number === 4) {
    stringArray.push(numerals[0] + numerals[1]);
  } else if (number === 5) {
    stringArray.push(numerals[1]);
  } else if(number > 5 && number <= 8){
    stringArray.push(numerals[1]);
      for(i = 5; i < number; i++) {
        stringArray.push(numerals[0]);
      }
  } else {
      stringArray.push(numerals[0] + numerals[2]);
  }
};


function tens (number){
  if(number <=3){
    for(i=0; i < number; i++){
      stringArray.push(numerals[2]);
    }
  } else if (number === 4) {
    stringArray.push(numerals[2] + numerals[3]);
  } else if (number === 5) {
    stringArray.push(numerals[3]);
  } else if(number > 5 && number <= 8){
    stringArray.push(numerals[3]);
      for(i = 5; i < number; i++) {
        stringArray.push(numerals[2]);
      }
  } else if (number === 9){
      stringArray.push(numerals[2] + numerals[4]);
  }else{console.log("no tens")}
  };





function hundreds (number) {
  if(number <=3){
    for(i=0; i < number; i++){
      stringArray.push(numerals[4]);
    }
  } else if (number === 4) {
    stringArray.push(numerals[4] + numerals[5]);
  } else if (number === 5) {
    stringArray.push(numerals[5]);
  } else if(number > 5 && number <= 8){
    stringArray.push(numerals[5]);
      for(i = 5; i < number; i++) {
        stringArray.push(numerals[4]);
      }
  } else if (number === 9){
      stringArray.push(numerals[4] + numerals[6]);
  }else {console.log("no hundreds");}



};

function thousands (number) {

  if(number <=3){
    for(i=0; i < number; i++){
      stringArray.push(numerals[6]);
    }
  } else {console.log("You cannot count higher than 4000 in Roman Numerals!");}






}


//front end
$(document).ready(function(){
  $("#userInputForm").submit(function(event){
    event.preventDefault();

    var someVar = $("#userInput").val();

    var arr = someVar.split('').map(Number);
    var reversedArr = arr.reverse();


    // romanize(reversedArr);

    thousands(3);
    console.log(stringArray);


  });
});
