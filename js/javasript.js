fetch("https://api.discogs.com")
    .then(responce => responce.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
