let button = document.querySelector('button')
let result = document.querySelector('.result')
button.addEventListener('click', function resultfor() {
let arr= []
sum=0
multiply=1
function getRandom() {
    rnd= Math.round(Math.random() * (20) - 10);
return rnd
  }
  for (i=0;i<10;i++){
    a=getRandom();
    arr.push(a);
    sum=sum+a;
    multiply=multiply*a
    }
min=Math.min.apply(Math,arr);
max=Math.max.apply(Math,arr);
middle=sum/10

resultAll=("Сгенерировали:"+arr+" Сумма чисел:"+sum + " Минимальное:"+min+" Максимальное:"+max+ " Среднее арифметическое:"+ middle+" Произведение чисел:"+multiply )
result.innerHTML=resultAll
})