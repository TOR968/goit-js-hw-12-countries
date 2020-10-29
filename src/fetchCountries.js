const BASE_URL = 'https://restcountries.eu/rest/v2';


function fetchCountries (countryId) {
    return fetch(`${BASE_URL}/name/${countryId}`).then(response => 
      response.json(),
);
}

export default { fetchCountries };