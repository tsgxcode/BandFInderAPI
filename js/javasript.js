// Function to fetch band data from Discogs API
async function searchBand(bandName) {
    const discogsApiKey = 'YOUR_DISCOGS_API_KEY'; // Replace with your API key
    const userAgent = 'MyWebApp/1.0'; // Replace with your app name
  
    try {
      const response = await fetch(`https://api.discogs.com/database/search?q=${bandName}&type=artist`, {
        headers: {
          'User-Agent': userAgent,
          'Authorization': `Discogs key=${discogsApiKey}`
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.results && data.results.length > 0) {
        return data.results;
      } else {
        return null; // Band not found
      }
    } catch (error) {
      console.error('Discogs API error:', error);
      return null; // Handle errors gracefully
    }
  }
  
  // Example usage (assuming you have an input field with id "bandInput" and a div with id "resultsDiv")
  document.getElementById('searchButton').addEventListener('click', async () => {
    const bandName = document.getElementById('bandInput').value;
    const resultsDiv = document.getElementById('resultsDiv');
  
    if (!bandName) {
      resultsDiv.textContent = 'Please enter a band name.';
      return;
    }
  
    resultsDiv.textContent = 'Searching...';
  
    const results = await searchBand(bandName);
  
    if (results) {
      resultsDiv.innerHTML = ''; // Clear previous results
      results.forEach(band => {
        const bandDiv = document.createElement('div');
        bandDiv.textContent = band.title; // Display band name
        resultsDiv.appendChild(bandDiv);
      });
    } else {
      resultsDiv.textContent = 'Band not found.';
    }
  });
