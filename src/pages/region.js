import getHash from '../utils/getHash';
import getData from '../utils/getData';

const region = async () => {
  const regionUrl = getHash()
  const region = await getData(regionUrl, 'region')
  const regionName = region;
  const view = `
  ${regionName.map(region => `${region}` )}
    <div>
      <img src="" alt="Flag of country"/>
      <p>Germany</p>
      <div>
        <p>Population: </p>
        <p>Region: </p>
        <p>Capital: </p>
      </div>
    </div>
  `;
  return view
}

export default region;