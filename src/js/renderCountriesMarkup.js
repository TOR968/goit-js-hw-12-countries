import countriesListTemplate from '../templates/countries-list.hbs';
import countryInfoTemplate from '../templates/country-info.hbs';

import { refs } from '../js/refs';

function renderCountriesMarkup(countries) {
    let markup = null;
    if (countries.length === 1) {
        markup = countryInfoTemplate(countries);
        return refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
    } else if (countries.length <= 10 || countries.length > 1) {
        markup = countriesListTemplate(countries);
        return refs.countriesList.insertAdjacentHTML('beforeend', markup);
    }
}

export default renderCountriesMarkup;
