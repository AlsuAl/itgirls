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
    if (b.value==0){
        alert("На ноль делить нельзя!");
      }
    document.getElementById('total').innerHTML = total;
}
function multiplication() {
    total=(Number(a.value)*Number(b.value));
    document.getElementById('total').innerHTML = total;
}