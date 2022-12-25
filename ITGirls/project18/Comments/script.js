let btn = document.querySelector('button');
let result = document.querySelector('.result');

document.addEventListener("DOMContentLoaded" ,function(event){
    let name=localStorage.getItem('name')
    if(name!=null){
        document.querySelector('.author').value = name;
    }
    });
btn.addEventListener('click', function showMessage() {
let comment= document.querySelector('.comment').value;
let author= document.querySelector('.author').value;
localStorage.setItem('name',author)
// if(localStorage.getItem('name') == null){

// } с этой строкой не работает
// с аватаркой не получилось
result.innerHTML= author+":"+comment
})


