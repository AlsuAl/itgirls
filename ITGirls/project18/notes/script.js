let textarea = document.querySelector('textarea');

if(localStorage.textarea) textarea.innerHTML = localStorage.getItem('textarea');

textarea.addEventListener('input', () => {

    localStorage.setItem('textarea', textarea.value);

});