const API = 'https://restcountries.eu/rest/v2/';

const getData = async (alpha2Code, nativeName) => {
  let apiUrl =  null;
  if (alpha2Code && nativeName) {
    apiUrl = `${API}alpha/${alpha2Code}?fields=flag;name;${nativeName};population;region;capital;region;topLevelDomain;currencies;languages;borders`
  } else {
    apiUrl = `${API}alpha/${'AF'}?fields=flag;name;population;region;capital`;
  }

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data
  } catch(error) {
    console.log('Fetch Error', error);
  }
}

export default getData;