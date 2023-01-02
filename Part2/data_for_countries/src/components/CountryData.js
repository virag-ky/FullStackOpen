const CountryData = ({
  name,
  capital,
  area,
  png,
  languages,
  temp,
  weatherIcon,
  wind,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <span>Capital: {capital}</span>
      <br />
      <span>Area: {area}</span>
      <h3>Languages:</h3>
      <ul>
        {Object.values(languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img alt="country flag" src={png} />
      <h2>Weather in {capital}</h2>
      <span>Temperature: {temp} Celsius</span>
      <br />
      <img />
      <span>Wind: {wind} m/s</span>
    </div>
  );
};

export default CountryData;
