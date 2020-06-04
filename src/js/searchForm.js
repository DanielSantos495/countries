import getData from '../utils/getData';

const searchForm = async () => {

  const form = null || document.getElementById('form');

  async function searchCountry(event) {

    event.preventDefault();

    const value = new FormData(form);
    const valueTypeUrl = `#/${value.get('value').toLowerCase()}`;
    const urlTransformLink = valueTypeUrl.link(valueTypeUrl);
    // const fetch = await getData(url);
    console.log(urlTransformLink);


  }

  const value = form.addEventListener('submit', searchCountry);

}

export default searchForm;