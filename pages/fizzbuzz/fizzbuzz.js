function sumFn(){ // create fn
    let numberInputA = parseFloat($('#numberOne').val());  // get value form id html and set to {numberInput}
    let numberInputB = parseFloat($('#numberTwo').val());   
    let sumTotal= numberInputA+numberInputB;
    checkFizzBuzz(sumTotal) // call fn and send parameter {numberInput}
}

function checkFizzBuzz(tempNumber) {
    if (tempNumber % 15 === 0) {
        $('#resultFizzBuzz').text(tempNumber +" >>>>> : of (FIZZBUZZ)")  // set text {tempNumber} of FiZZ to id {resultFizzBuzz} 
        $('#resultDisplay').show();  // show div id {resultDisplay}
    } else if (tempNumber % 3 === 0) {
        $('#resultFizzBuzz').text(tempNumber +" >>>>> : of (FIZZ)")  // set text {tempNumber} of FiZZ to id {resultFizzBuzz} 
        $('#resultDisplay').show();  // show div id {resultDisplay}
    } else if (tempNumber % 5 === 0) {
        $('#resultFizzBuzz').text(tempNumber +" >>>>> : of (BUZZ)")  // set text {tempNumber} of FiZZ to id {resultFizzBuzz} 
        $('#resultDisplay').show();  // show div id {resultDisplay}
    } else {
        $('#resultFizzBuzz').text(tempNumber +" >>>>> : of (NOT)")  // set text {tempNumber} of FiZZ to id {resultFizzBuzz} 
        $('#resultDisplay').show();  // show div id {resultDisplay}
    }
}

function hideResult(){
    $('#resultDisplay').hide();
}






