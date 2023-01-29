function onSearch() {
    let getGif=document.getElementById("getgif").value
    fetch("https://api.giphy.com/v1/gifs/search?api_key=0EIjxebv3nXASQvz6swlo2gkTYBy9QW&limit=5&q="+getGif)
    .then(response => {
        if (!response.ok) { throw new Error("Сервер не доступен")}
        console.log(response)
    return response.json()
    })
    .then(data=>{
        for(i = 0; i < data.data.length; i++)
         {
            document.getElementById("image"+i).src=data.data[i].images.original.url;
         }
         console.log(data.meta.msg)
        } )
    .catch(error => alert(error))
    .finally(() => console.log( 'end'))
}
