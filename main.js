
function myfunc() {
var b1,b2,b3
// b1 = document.getElementById("b1").value;
// b2 = document.getElementById("b2").value;
}

flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("b1").innerText= "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").innerText = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
function myfunc_4() {
    if (flag == 1) {
        document.getElementById("b2").innerText = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").innerText = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("b3").innerText = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").innerText = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}