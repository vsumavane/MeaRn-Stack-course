function performOperations() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;
    
    var result;
    
    if (operation === "addition") {
        result = num1 + num2;
    } else if (operation === "subtraction") {
        result = num1 - num2;
    } else if (operation === "multiplication") {
        result = num1 * num2;
    } else if (operation === "division") {
        result = num1 / num2;
    }
    
    document.getElementById("result").innerHTML = "Result: " + result;
}