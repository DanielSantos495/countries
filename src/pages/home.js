import getData from '../utils/getData';

const home = async () => {
  const countries = await getData();
  const countriesName = countries;
  console.log(countriesName);
  const view = `
  <div class="container">
    <div class="countries__container">
    ${countriesName.map(country => `
      <div class="countries__country">
        <a href="#/${country.name.toLowerCase()}/">
          <img src="${country.flag}" alt="Flag of country"/>
        </a>
        <div class="countries__country-container">
          <h2>${country.name}</h2>
          <p>
            <span>Population:</span> ${country.population}
          </p>
          <p>
            <span>Region:</span> ${country.region}
          </p>
          <p>
            <span>Capital:</span> ${country.capital}
          </p>
        </div>
      </div>` ).join('')}
    </div>
  </div>
  `;

  return view
}

export default home;