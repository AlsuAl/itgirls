const btn= document.querySelector(".btn");
let lst=[]; 
btn.addEventListener('click', function(){
  let name = document.querySelector(".first").value;
  lst.push(Number(name))
  let sum = 0;

  for (let value of lst) {
    sum =sum+ Number(value);
  }
  if (lst.length>1){
  lst.sort(function(a, b) {
    return a - b;
  });
 }
 
 document.querySelector('div').innerHTML= lst+" Sum= "+sum;

});