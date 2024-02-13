<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokémon</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<div class="container">
    <h2  class="text-center mb-4"><i class="fas fa-pokemon">POKÉMON</h2>
  <div id="pokemon-cards" class="row"></div>
  <div id="pagination" class="mt-3 d-flex justify-content-center"></div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="api.js"></script>
<script>
  const pokemonCards = document.getElementById('pokemon-cards');
  const pagination = document.getElementById('pagination');
  let currentPage = 1;
  let totalPages = 0;

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('La respuesta no es correcta');
      }
      return await response.json();
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const loadPage = (page) => {
    fetchData(`https://pokeapi.co/api/v2/pokemon/?offset=${(page - 1) * 10}&limit=10`)
      .then(({ results }) => {
        pokemonCards.innerHTML = '';
        results.forEach(pokemon => {
          fetchData(pokemon.url)
            .then(({ name, sprites, abilities, stats }) => {
              const card = document.createElement('div');
              card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');
              card.innerHTML = `
                <div class="card">
                  <img class="card-img-top" src="${sprites.front_default}" alt="${name}">
                  <div class="card-body">
                    <h5 class="card-title">Nombre: ${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Habilidades:</h6>
                    <ul class="card-text">${abilities.map(({ ability }) => `<li>${ability.name}</li>`).join('')}</ul>
                    <h6 class="card-subtitle mb-2 text-muted">Estadísticas:</h6>
                    <ul class="card-text">${stats.map(({ stat, base_stat }) => `<li>${stat.name}: ${base_stat}</li>`).join('')}</ul>
                  </div>
                </div>
              `;
              pokemonCards.appendChild(card);
            });
        });
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  };

  const updatePagination = () => {
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.classList.add('btn', 'btn-primary', 'mr-2');
      button.innerText = i;
      if (i === currentPage) {
        button.classList.add('active');
      }
      button.addEventListener('click', () => {
        currentPage = i;
        loadPage(currentPage);
        updatePagination();
      });
      pagination.appendChild(button);
    }
  };

  fetchData('https://pokeapi.co/api/v2/pokemon/')
    .then(({ count }) => {
      totalPages = Math.ceil(count / 10);
      updatePagination();
      loadPage(currentPage);
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
</script>
</body>
</html>
