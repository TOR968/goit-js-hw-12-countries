import countriesCardTpl from './countries.hbs';
import API from './fetchCountries';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchCountries(searchQuery)
    .then(renderCountriesCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderCountriesCard(country) {
  const markup = countriesCardTpl(country);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError() {
  alert('try another country');
}
