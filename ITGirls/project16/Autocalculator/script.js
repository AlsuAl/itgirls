let arr=[]
let select=document.querySelector('select')
let button=document.querySelector('button')
button.addEventListener('click',(event) => {
    event.preventDefault

    arr[0]=select.value

    let arrRadio=document.querySelectorAll('.radio')
    arrRadio.forEach(item => {
        if(item.checked == true){
            arr[1]=item.value
        }
    })

    let checkbox=document.querySelectorAll('.checkbox')
    if(checkbox.checked == true){
      arr[2]=checkbox.value
    }
    let count=0;
    arr.forEach( item => {
        count=count + +item
    })
    let result=document.querySelector('.result')
    result.innerHTML=count
})

