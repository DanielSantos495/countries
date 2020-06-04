import getHash from '../utils/getHash';
import getData from '../utils/getData';

const country = async () => {

  const nameCountry = getHash();
  const country = await getData(nameCountry);
console.log(country);
  const view = `
    <button>
      <a href="#/">
        back
      </a>
    </button>
    <div>
      <img src="${country[0].flag}" alt="Flag of country"/>
      <p>${country[0].name}</p>
      <div>
        <p>Native Name: ${country[0].nativeName} </p>
        <p>Population: ${country[0].population}</p>
        <p>Region: ${country[0].region}</p>
        <p>Sub Region: ${country[0].subregion}</p>
        <p>Capital: ${country[0].capital}</p>
      </div>
      <div>
        <p>Top level Domain: ${country[0].topLeveDomain}</p>
        <p>Currencies: ${country[0].currencies[0].name}</p>
        <p>Languages: ${country[0].languages.map(language => `${language.name}`)}</p>
      </div>
      <div>
        <p>Border Countries</p>
        ${country[0].borders.map(border => `
          <a href="#/${border}">${border}</a>
        `).join('')}
      </div>
    </div>
  `;

  return view

}

export default country;