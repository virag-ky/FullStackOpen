import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      const countryNames = response.data;
      setCountries(countryNames);
    });
  }, []);

  const getResults = (event) => {
    setSearchValue(event.target.value);
    setLoaded(true);
  };

  const displayCountries = () => {
    const filtered = countries.filter((country) => {
      if (searchValue === '') {
        setLoaded(false);
        return country;
      } else if (
        country.name.common
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      ) {
        return country;
      }
    });

    if (filtered.length > 10) {
      return <p>Too many matches, specify another filter.</p>;
    } else if (filtered.length <= 10 && filtered.length > 1) {
      return filtered.map((item) => <p key={item.id}>{item.name.common}</p>);
    } else {
      return filtered.map((item) => (
        <div key={item.name.official}>
          <h1>{item.name.common}</h1>
          <span>Capital: {item.capital}</span>
          <br />
          <span>Area: {item.area}</span>
          <h2>Languages:</h2>
          <ul>
            {Object.values(item.languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img alt="country flag" src={item.flags.png} />
        </div>
      ));
    }
  };

  return (
    <div>
      <label>
        Find countries <input type="text" onChange={getResults} />
      </label>
      <div>{loaded ? displayCountries() : ''}</div>
    </div>
  );
};

export default App;
