fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const { results } = data;
    Promise.all(results.map(pokemon => fetch(pokemon.url).then(response => response.json())))
      .then(pokemonsData => {
        pokemonsData.forEach(pokemonData => {
          const { name, abilities, stats } = pokemonData;
          console.log(`Nombre: ${name}`);
          console.log('Habilidades:');
          abilities.forEach(({ ability }) => {
            console.log(`- ${ability.name}`);
          });
          console.log('Estadísticas:');
          stats.forEach(({ stat, base_stat }) => {
            console.log(`- ${stat.name}: ${base_stat}`);
          });
          console.log('----------------------------------------');
        });
      })
      .catch(error => {
        console.error('Error fetching Pokémon data:', error);
      });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
