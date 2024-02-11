fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const { results } = data;
    results.forEach(pokemon => {
      fetch(pokemon.url) 
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(pokemonData => {
          console.log(`Nombre: ${pokemonData.name}`);
          console.log('Habilidades:');
          pokemonData.abilities.forEach(({ ability }) => {
            console.log(`- ${ability.name}`);
          });
          console.log('Estadísticas:');
          pokemonData.stats.forEach(({ stat, base_stat }) => {
            console.log(`- ${stat.name}: ${base_stat}`);
          });
          console.log('----------------------------------------');
        })
        .catch(error => {
          console.error('Error fetching Pokémon data:', error);
        });
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
