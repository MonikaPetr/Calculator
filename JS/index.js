var result = lastResult = number = action =  "0";
var operation = "";

window.onload = function() {
    document.getElementById("result").innerHTML = result;
};

function clearResult() {
    result = lastResult = action = "0"
    dots = 0;
    document.getElementById("result").innerHTML = result;
}

function numberInput(number) {
    if(digitLimit()) {
        return false;
    }
    if (action == "" || action == 0) {
        action = number
        document.getElementById("result").innerHTML = action;
    } else {
        action = action + "" + number;
        document.getElementById("result").innerHTML = action;
    }
}

function digitLimit() {
    if(action.length > 8) {
        alert("pasiektas maksimalus ivesties limitas");
        return true;
    }

    return false;
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
    lastResult = parseFloat(lastResult);
    if(lastResult != "") {
        result = lastResult;
    }

    if(operation == "plus") {
        lastResult = parseFloat(result) + parseFloat(action);
    } 
    else if (operation == "minus") {
        lastResult = parseFloat(result) - parseFloat(action);
    }
    else if (operation =="divide") {
        lastResult = parseFloat(result) / parseFloat(action);
    } 
    else if (operation == "times") {
        lastResult = reparseFloat(result) * parseFloat(action);
    } else {
        lastResult = "0";
    }

    document.getElementById("result").innerHTML = lastResult;
    result = action = operation = "";
}



