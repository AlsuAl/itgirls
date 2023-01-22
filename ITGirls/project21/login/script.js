btn.onclick = function(event){
    event.preventDefault();
    let user={
        name:document.getElementById("first").value,
        lastname:document.getElementById("last").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password1").value
    }
    fetch("https://httpbin.org/post",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(user => {
                    console.log(user);
                })
    .catch(error => console.log(error));
}
