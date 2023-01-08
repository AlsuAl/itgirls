class Validator{
    static isEmail(email){
        const regex = new RegExp(".+@.+\\..+",'g');
        if (email.value ==''){
            return "Email is empty";
        }else{
        return (regex.test(email.value));}
    }
    static isDomain(url){
        const regex1= new RegExp("[0-9a-z].+\\.[0-9a-z].+",'g');
        if (url.value ==''){
           return "Domain is empty";
            
        } else{
        return (regex1.test(url.value));}
    }
    static isDate(date){
        const regex2 = new RegExp("^([0-1]{1}|[0-2]{1}[0-9]{1}|3[0-1]{1})\\.([0-1]{1}[0-2]{1})\\.[1-2]{1}(9|0)[0-9]{1}[0-9]{1}",'g');
        if (date.value ==''){
            return "Date is empty";
        }else{
        return (regex2.test(date.value));}
    }
    static isPhone(phone){
        const regex3 = new RegExp("\\+?[0-9]{11}",'g');
        if (phone.value ==''){
            return "Phone is empty";
        }else{
        return (regex3.test(phone.value));}
    }
    
}
let email=document.querySelector('.email');
let url=document.querySelector('.url');
let date=document.querySelector('.date');
let phone=document.querySelector('.phone');
function result(){
   console.log(Validator.isEmail(email));
   console.log(Validator.isDomain(url));
   console.log(Validator.isDate(date));
   console.log(Validator.isPhone(phone));
}
