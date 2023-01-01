import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      const countryNames = response.data.map((data) => {
        return data.name.common;
      });
      //console.log(response.data);
      setCountries(countryNames);
    });
  }, []);

  const getResults = (event) => {
    setSearchValue(event.target.value);
  };

  const displayCountries = () => {
    return countries
      .filter((country) => {
        if (searchValue === '') {
          return country;
        } else if (
          country.toLowerCase().includes(searchValue.toLocaleLowerCase())
        ) {
          return country;
        }
      })
      .map((item) => <p key={item}>{item}</p>);
  };

  return (
    <div>
      <label>
        Find countries <input type="text" onChange={getResults} />
      </label>
      <div>{displayCountries()}</div>
    </div>
  );
};

export default App;
