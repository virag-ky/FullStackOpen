const CountryData = ({ name, capital, area, png, languages }) => {
  return (
    <div>
      <h1>{name}</h1>
      <span>Capital: {capital}</span>
      <br />
      <span>Area: {area}</span>
      <h2>Languages:</h2>
      <ul>
        {Object.values(languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img alt="country flag" src={png} />
    </div>
  );
};

export default CountryData;
