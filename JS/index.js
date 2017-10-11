var result = "0";
var action = "";
var number = "";
var operation = "";

window.onload = function() {
    document.getElementById("result").innerHTML = result;
};

function clearResult() {
    result = "0"
    action = result;
    document.getElementById("result").innerHTML = result;
}

function numberInput(number) {

    if (action == "" || action == 0) {
        action = number
        document.getElementById("result").innerHTML = action;
    } else {
        action = action + "" + number;
        document.getElementById("result").innerHTML = action;
    }
}

function plusNumbers() {
    result = action;
    action = "";
    dots = 0;
    operation = "plus";
    document.getElementById("result").innerHTML = "+";
}

function minusNumbers() {
    result = action;
    action = "";
    dots = 0;
    operation = "minus";
    document.getElementById("result").innerHTML = "-";
}

function divideNumbers() {
    result = action;
    action = "";
    dots = 0;
    operation = "divide";
    document.getElementById("result").innerHTML = "/";
}

function timesNumbers() {
    result = action;
    action = "";
    dots = 0;
    operation = "times";
    document.getElementById("result").innerHTML = "*";
}

var dots = 0;

function addDot() {
    if (dots == 0) {
        action = action + ".";
     document.getElementById("result").innerHTML = action;   
    }
    dots += 1;
}

function backspace() {
    var numberLength = action.length - 1;

    if (numberLength > -1) {
        action = action.substring(0, numberLength);
    }

    if (action == "") {
        action = 0;
    }
    document.getElementById("result").innerHTML = action;
}

function showResult() {
    result = parseFloat(result);
    if(operation == "plus") {
        result = parseFloat(result) + parseFloat(action); ///tekstini formata keicia i realiuosius skaicius
    } 
    else if (operation == "minus") {
        result -= parseFloat(action);
    }
    else if (operation =="divide") {
        result /= parseFloat(action);
    } 
    else if (operation == "times") {
        result *= parseFloat(action);
    } else {
        result = "0";
    }

    document.getElementById("result").innerHTML = result;
    result = action = operation = "";
}



