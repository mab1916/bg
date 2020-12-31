function inp(valu) {
    document.getElementById("values").value += valu;
}

function output() {
    var val1 = document.getElementById("values").value;
    var val2 = eval(val1);
    document.getElementById("values").value = val2;
}

function cler() {
    document.getElementById("values").value = "";
}