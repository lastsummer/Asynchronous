fetch('https://www.omdbapi.com/?s=batman&y=2018&apikey=3971f798')
.then(response=> response.json())
.then(data=> console.log(data))