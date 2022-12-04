let firstname = document.getElementById("first")
let secondname = document.getElementById("last")
let email = document.getElementById("email")
let passwordfirst = document.getElementById("password1")
let passwordsecond = document.getElementById("password2")
function check(){
document.getElementById("error").innerHTML=''
    if(firstname.value==''){
        document.getElementById("error").innerHTML+=" Ваше Имя не заполнено!<br>"
    }
    if(secondname.value==''){
        document.getElementById("error").innerHTML+=" Ваше Фамилия не заполнена!<br>"
    }
    if(email.value==''){
        document.getElementById("error").innerHTML+=" Ваше Email не заполнен!<br>"
    }
    if(passwordfirst.value==''){
        document.getElementById("error").innerHTML+=" Ваше Пароль не заполнен!<br>"
    } else if(passwordfirst.value.length<=8){
        document.getElementById("error").innerHTML+=" Ваше Пароль слишком короткий!<br>"
    }
    if(passwordsecond.value!=passwordfirst.value)
        document.getElementById("error").innerHTML+=" Ваши Пароли не совпадают!<br>"
    }