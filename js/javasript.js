fetch("https://api.discogs.com/releases/249504")
    .then(responce => responce.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
