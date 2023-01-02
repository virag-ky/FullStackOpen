import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryData from './components/CountryData';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [currCountry, setCurrCountry] = useState({});
  const [data, setData] = useState(false);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      const countryNames = response.data;
      setCountries(countryNames);
    });
  }, []);

  const getResults = (event) => {
    setSearchValue(event.target.value);
    setLoaded(true);
    setData(false);
  };

  const showData = (event) => {
    const current = countries.filter((country) => {
      if (event.target.id === country.name.official) {
        return country;
      }
    });
    setCurrCountry(current[0]);
    setData(true);
  };

  const displayCurrentData = () => {
    return (
      <CountryData
        name={currCountry.name.common}
        capital={currCountry.capital}
        area={currCountry.area}
        png={currCountry.flags.png}
        languages={currCountry.languages}
      />
    );
  };

  const displayCountries = () => {
    const filtered = countries.filter((country) => {
      if (searchValue === '') {
        setLoaded(false);
        return country;
      } else if (
        country.name.common.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return country;
      }
    });

    if (filtered.length > 10) {
      return <p>Too many matches, specify another filter.</p>;
    } else if (filtered.length <= 10 && filtered.length > 1) {
      return filtered.map((item) => {
        return (
          <div key={item.name.official}>
            {item.name.common}
            <button id={item.name.official} onClick={showData}>
              Show
            </button>
          </div>
        );
      });
    } else {
      return filtered.map((item) => (
        <CountryData
          key={item.name.official}
          name={item.name.common}
          capital={item.capital}
          area={item.area}
          png={item.flags.png}
          languages={item.languages}
        />
      ));
    }
  };

  return (
    <div>
      <label>
        Find countries <input type="text" onChange={getResults} />
      </label>
      <div>{loaded ? displayCountries() : ''}</div>
      <div>{data ? displayCurrentData() : ''}</div>
    </div>
  );
};

export default App;
