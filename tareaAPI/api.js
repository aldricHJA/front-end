fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const { results } = data;
    results.forEach(pokemon => {
      console.log(pokemon.name);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

