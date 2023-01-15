fetch('https://api.nasa.gov/planetary/apod?api_key=qYrq11epcbHIxtzzaOmeMg5gZfz1fvHo0ToAwVww')
      .then(response => response.json())
	  .then(planetary =>
        {
            document.getElementById("image").src=planetary.url;
            document.getElementById("explanation").innerText=planetary.explanation;
            document.getElementById("title").innerText=planetary.title;
        })
      .catch(err => console.log(err));