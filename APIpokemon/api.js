const pokemonCards = document.getElementById('pokemon-cards');
const pagination = document.getElementById('pagination');
let currentPage = 1;

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
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('row');

            const cardColumn = document.createElement('div');
            cardColumn.classList.add('col-sm-6', 'mb-3', 'mb-sm-0');
            cardColumn.innerHTML = `
              <div class="card">
                <img src="${sprites.front_default}" class="card-img-top" alt="${name}">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Abilities:</h6>
                  <ul class="card-text">${abilities.map(({ ability }) => `<li>${ability.name}</li>`).join('')}</ul>
                  <h6 class="card-subtitle mb-2 text-muted">Stats:</h6>
                  <ul class="card-text">${stats.map(({ stat, base_stat }) => `<li>${stat.name}: ${base_stat}</li>`).join('')}</ul>
                </div>
              </div>
            `;
            cardContainer.appendChild(cardColumn);

            pokemonCards.appendChild(cardContainer);
          });
      });
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
};

const updatePagination = () => {
  pagination.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-pagination', 'mr-4');
    button.innerText = i;
    button.addEventListener('click', () => {
      currentPage = i;
      loadPage(currentPage);
    });
    pagination.appendChild(button);
  }
};

updatePagination();
loadPage(currentPage);


