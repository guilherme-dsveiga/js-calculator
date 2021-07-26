let stringFunc = '';
let stringTemp = '';
let result = '';
let stringSum = '';
let operator = '';

function pushToStr(param) {
        if (param == "/" || param == "*" || param == "-" || param == "+") {
                operator = param;
                stringTemp = stringFunc;
                stringFunc = '';
        } else if(param == "C"){
                stringFunc = '';
                stringTemp = '';
                operator = '';
                result = '';
        } else {
                stringFunc += param;
        }

        stringSum = stringTemp + ' ' + operator + ' ' + stringFunc;
        let x = document.getElementById("screen");
        x.innerHTML = stringSum;
}

function equalPushed() {
        if (operator == "/") {
                result = (parseFloat(stringTemp) / parseFloat(stringFunc)).toString();
                stringFunc = result;
        } else if (operator == "*") {
                result = (parseFloat(stringTemp)  * parseFloat(stringFunc)).toString();
                stringFunc = result;
        } else if (operator == "-") {
                result = (parseFloat(stringTemp)  - parseFloat(stringFunc)).toString();
                stringFunc = result;
        } else if (operator == "+") {
                result = (parseFloat(stringTemp)  + parseFloat(stringFunc)).toString();
                stringFunc = result;
        }

        let x = document.getElementById("screen");
        x.innerHTML = result;
}