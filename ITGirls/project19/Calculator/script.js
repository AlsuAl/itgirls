
class Calculator {
 static  addition(a,b) {
        return (+a+ +b);
    }

 static subtraction(a,b) {
        return (a-b);
    }

 static multiplication(a,b) {
        return (a*b);
    }

 static division(a,b){
        return (a/b);
    }
    }
let a = document.getElementById('first');
let b = document.getElementById('second');
let total=document.getElementById('total');
function addition() {
        total.innerHTML=Calculator.addition(a.value,b.value);
    }
function subtraction(){
        total.innerHTML=Calculator.subtraction(a.value,b.value);  
    }
function multiplication(){
        total.innerHTML=Calculator.multiplication(a.value,b.value);
    }
function division() {
        total.innerHTML=Calculator.division(a.value,b.value);
    }