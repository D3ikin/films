const apiKey = '69469c90-bd67-41d4-9d0f-85c51c27fa9f'
const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/'


const options = {
    method: 'GET',
    headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
    },
}

const filmsContainer = document.querySelector('.films')

async function fetchData(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

async function getAndRenderFilms() {

    const data = await fetchData(url + 'top', options);

    renderFilms(data.films)

}

function renderFilms(films) {
    for (film of films) {
        console.log(film)
        const filmCard = `
            <div class="card card_id_${film.filmId}">
                <img src=${film.posterUrl} alt=${film.nameRu} class="card__img">
                <h3 class="card__title">${film.nameRu}</h3>
                <p class="card__year">${film.year}</p>
                <p class="card__rate">Рейтинг: ${film.rating}</p>
            </div>
        `

        filmsContainer.insertAdjacentHTML('beforeend', filmCard)
    }
}

getAndRenderFilms()

