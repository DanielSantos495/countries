const country = () => {
  const view = `
    <button>
      Back
    </button>
    <div>
      <img src="" alt="Flag of country"/>
      <p>Germany</p>
      <div>
        <p>Native Name: </p>
        <p>Population: </p>
        <p>Region: </p>
        <p>Sub Region: </p>
        <p>Capital: </p>
      </div>
      <div>
        <p>Top level Domain: </p>
        <p>Currencies: </p>
        <p>Languages: </p>
      </div>
      <div>
        <p>Border Countries</p>
        <a href="">France</a>
        <a href="">Germany</a>
        <a href="">Netherlands</a>
      </div>
    </div>
  `;
  return view
}

export default country;