const API = 'https://restcountries.eu/rest/v2/';

const getData = async (name) => {

  let apiUrl =  null;
  if (name) {

    apiUrl = `${API}name/${name}`

  } else {

    apiUrl = `${API}all?fields=name;nativeName;region;capital;subregion;currencies;topLeveDomain;population;flag;`;

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