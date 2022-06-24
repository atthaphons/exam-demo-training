function doSomething(){ // create fn
    let numberInput = $('#numberFizzBuzz').val(); // get value form id html and set to {numberInput}
    validateCondition(numberInput) // call fn and send parameter {numberInput}

}

function validateCondition(tempNumber) {
    let temp_result = tempNumber % 3 // create variable for of (tempNumber) 
   console.log(temp_result+ " temp_result") // view debug log


    if (!temp_result) { // check temp_result  (!) **not ture 
        $('#resultFizzBuzz').text(tempNumber +"of FIZZ")  // set text {tempNumber} of FiZZ to id {resultFizzBuzz} 
        $('#resultDisplay').show();  // show div id {resultDisplay}
    } else {
        $('#resultFizzBuzz').text(tempNumber +"of NOT") // set text {tempNumber} of NOT to id {resultFizzBuzz} 
        $('#resultDisplay').show(); // show div id {resultDisplay}
    }
   
}



