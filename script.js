function numAddition(firstNumber, secondNumber) {
        var sum = parseInt(firstNumber) + parseInt(secondNumber);
        document.getElementById("output").innerHTML = "The sum of " + firstNumber + " and " + secondNumber + " is " + sum + ".";
    }

function numSubtraction(firstNumber, secondNumber) {
        var difference = parseInt(firstNumber) - parseInt(secondNumber);
        document.getElementById("output").innerHTML = "The difference of " + firstNumber + " and " + secondNumber + " is " + difference + ".";
}

function numMultiplication(firstNumber, secondNumber) {
        var product = parseInt(firstNumber) * parseInt(secondNumber);
        document.getElementById("output").innerHTML = "The product of " + firstNumber + " and " + secondNumber + " is " + product + ".";

}

function numDivision(firstNumber, secondNumber) {
        var quotient = parseInt(firstNumber) / parseInt(secondNumber);
        document.getElementById("output").innerHTML = "The quotient of " + firstNumber + " and " + secondNumber + " is " + quotient + ".";
}

function numModulo(firstNumber, secondNumber) {
        var remainder = parseInt(firstNumber) % parseInt(secondNumber);
        document.getElementById("output").innerHTML = "The remainder of " + firstNumber + " and " + secondNumber + " is " + remainder + ".";
}