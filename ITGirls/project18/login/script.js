let errors=[];
function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) 
    { errors.push('Поле '+input.placeholder+' не заполнено'); }
    if (validity.patternMismatch) 
    { errors.push('Неверный формат заполнения '+input.placeholder); }
     
}
 function checkAll() {
        errors=[];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input);
    }

    let errorDiv = document.querySelector('.error');
    errorDiv.innerHTML = errors.join('. \n');}