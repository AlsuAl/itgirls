let btn = document.querySelector('button')
let result = document.querySelector('.result')
let strcheck= document.querySelector('.comment')

btn.addEventListener('click', function checkSpam() {
let str=strcheck.value
let lowerStr = str.toLowerCase();

if(lowerStr.includes('viagra')|| lowerStr.includes('xxx')){
    lowerStr=lowerStr.replace('viagra','***')
    lowerStr=lowerStr.replace('xxx','***')
};
result.innerHTML=lowerStr
})


