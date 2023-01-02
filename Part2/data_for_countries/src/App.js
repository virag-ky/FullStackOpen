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
  const [weather, setWeather] = useState({});

  const convertToCelsius = (kelvin) => kelvin - 273.15;

  const getWeather = (current) => {
    const lat = current.capitalInfo.latlng[0];
    const lon = current.capitalInfo.latlng[1];

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=
        ${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((result) => {
        const temp = result.data.main.temp;
        const weatherIcon = result.data.weather[0].icon;
        const wind = result.data.wind.speed;

        setWeather({ temp, weatherIcon, wind });
      });
  };

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      const countryNames = response.data;
      setCountries(countryNames);
    });
  }, []);

  useEffect(() => {
    if (data) {
      getWeather(currCountry);
    }
  }, [currCountry]);

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
    const tempC = convertToCelsius(weather.temp);
    return (
      <CountryData
        name={currCountry.name.common}
        capital={currCountry.capital}
        area={currCountry.area}
        png={currCountry.flags.png}
        languages={currCountry.languages}
        temp={tempC}
        weatherIcon={weather.weatherIcon}
        wind={weather.wind}
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
      getWeather(filtered[0]);
      const tempC = convertToCelsius(weather.temp);
      return (
        <CountryData
          name={filtered[0].name.common}
          capital={filtered[0].capital}
          area={filtered[0].area}
          png={filtered[0].flags.png}
          languages={filtered[0].languages}
          temp={tempC}
          weatherIcon={weather.weatherIcon}
          wind={weather.wind}
        />
      );
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
