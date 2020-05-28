import getData from '../utils/getData';

const home = async () => {
  const countries = await getData();
  const view = `
    <div>
      <form>
        <input type="text" placeholder="Search for a country..."/>
      </form>
      <nav>
        <p>
          Filter by Region
        </p>
        <ul>
          <li>
            <a href="">
              Africa
            </a>
          </li>
          <li>
            <a href="">
              America
            </a>
          </li>
          <li>
            <a href="">
              Asia
            </a>
          </li>
          <li>
            <a href="">
              Europe
            </a>
          </li>
          <li>
            <a href="">
              Oceania
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div>
        <div>
          <img src="" alt="Flag of country"/>
          <p>${countries.name}</p>
          <div>
            <p>Population: ${countries.population}/p>
            <p>Region: ${countries.region}</p>
            <p>Capital: ${countries.capital} </p>
          </div>
        </div>
    </div>
  `;
  return view
}

export default home;