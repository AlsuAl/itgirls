let first = document.querySelector('.firstname')
let second= document.querySelector('.surname')
let third = document.querySelector('.patronymic')
let result = document.querySelector('.result')
let button = document.querySelector('button')

button.addEventListener('click', function resultfor() {
newfirst=first.value.trim()
newsecond=second.value.trim()
newthird=third.value.trim()
result1=newfirst[0].toUpperCase() + newfirst.slice(1);
result2=newsecond[0].toUpperCase() + newsecond.slice(1);
result3=newthird[0].toUpperCase() + newthird.slice(1);
resultAll=("Имя:"+result1+" Фамилия:"+result2+" Отчество:"+result3)
result.innerHTML=resultAll
})
