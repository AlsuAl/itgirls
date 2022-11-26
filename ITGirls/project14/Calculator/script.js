let a = document.getElementById('first');
let b = document.getElementById('second');
function addition() {
    total=(Number(a.value)+Number(b.value));
    document.getElementById('total').innerHTML = total;
}
function subtraction() {
    total=(Number(a.value)-Number(b.value));
    document.getElementById('total').innerHTML = total;
}
function division() {
    total=(Number(a.value)/Number(b.value));
    document.getElementById('total').innerHTML = total;
}
function multiplication() {
    total=(Number(a.value)*Number(b.value));
    document.getElementById('total').innerHTML = total;
}