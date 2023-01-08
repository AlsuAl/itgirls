class Validator{
    constructor(options){
        this.email=options.email
        this.url=options.url
        this.date=options.date
        this.phone=options.phone
    }
    isEmail(email){
        const regex = new RegExp(".+@.+\\..+",'g');
        if (this.email.value ==''){
            return "Email is empty";
        }else{
        return (regex.test(this.email.value));}
    }
    isDomain(url){
        const regex1= new RegExp("[0-9a-z].+\\.[0-9a-z].+",'g');
        if (this.url.value ==''){
           return "Domain is empty";
            
        } else{
        return (regex1.test(this.url.value));}
    }
    isDate(date){
        const regex2 = new RegExp("^([0-1]{1}|[0-2]{1}[0-9]{1}|3[0-1]{1})\\.([0-1]{1}[0-2]{1})\\.[1-2]{1}(9|0)[0-9]{1}[0-9]{1}",'g');
        if (this.date.value ==''){
            return "Date is empty";
        }else{
        return (regex2.test(this.date.value));}
    }
    isPhone(phone){
        const regex3 = new RegExp("\\+?[0-9]{11}",'g');
        if (this.phone.value ==''){
            return "Phone is empty";
        }else{
        return (regex3.test(this.phone.value));}
    }
}
let email=document.querySelector('.email');
let url=document.querySelector('.url');
let date=document.querySelector('.date');
let phone=document.querySelector('.phone');
let validator= new Validator({
   email:email,
   url:url,
   date:date,
   phone:phone,

})
function result(){
    console.log(validator.isEmail(email));
    console.log(validator.isDomain(url));
    console.log(validator.isDate(date));
    console.log(validator.isPhone(phone));
 }