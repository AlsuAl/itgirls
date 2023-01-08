class Cat{
    constructor(options){
            this.petname=options.petname,
            this.username=options.username,
            this.phone=options.phone,
            this.male=options.male
            this.female=options.female
        }
    }

let petname=document.getElementById('petname');
let username=document.getElementById('name');
let phone=document.getElementById('phone');
let male=document.getElementById('male');
let female=document.getElementById('female');

function getAll(){
     let cat=new Cat({
        petname:petname.value,
        username:username.value,
        phone:phone.value,
        male:male.checked,
        female:female.checked,

})
return console.log(cat);
}
