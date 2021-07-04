const img = document.getElementById('img')
fetch("https://api.thecatapi.com/v1/images/search").then(response => response.json())