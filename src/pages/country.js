import getHash from '../utils/getHash';
import getData from '../utils/getData';

const country = async () => {

  const nameCountry = getHash();
  const country = await getData(nameCountry);
  const view = `
  <div class="container">
      <button class="button-back">
        <a href="#/">
          <i class="fas fa-long-arrow-alt-left"></i>
          Back
        </a>
      </button>
    <div class="country__container">
      <img src="${country[0].flag}" alt="Flag of country"/>
      <p class="country__name">${country[0].name}</p>
      <div class="country__descrip">
        <p><span>Native Name: </span>${country[0].nativeName} </p>
        <p><span>Population: </span>${country[0].population}</p>
        <p><span>Region: </span>${country[0].region}</p>
        <p><span>Sub Region: </span>${country[0].subregion}</p>
        <p><span>Capital: </span>${country[0].capital}</p>
      </div>
      <div class="country__descrip">
        <p><span>Top level Domain: </span>${country[0].topLeveDomain}</p>
        <p><span>Currencies: </span>${country[0].currencies[0].name}</p>
        <p><span>Languages: </span>${country[0].languages.map(language => `${language.name}`)}</p>
      </div>
      <div class="country__borders">
        <p><span>Border Countries</span></p>
        <div class="country-borders-name">
          ${country[0].borders.map(border => `
            <p>
              <a href="#/${border}">${border}</a>
            </p>
          `).join('')}
        </div>
      </div>
    </div>
  </div>
  
  `;

  return view

}

export default country;