const region = () => {
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