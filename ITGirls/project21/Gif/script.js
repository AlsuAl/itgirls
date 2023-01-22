function onSearch() {
    let getGif=document.getElementById("getgif").value
    fetch("https://api.giphy.com/v1/gifs/search?api_key=50EIjxebv3nXASQvz6swlo2gkTYBy9QW&limit=5&q="+getGif)
    .then(response => response.json())
    .then(data=>{
        for(i = 0; i < data.data.length; i++)
         {
            document.getElementById("image"+i).src=data.data[i].images.original.url;
         }
        })
    .catch(err => console.log(err));
}