import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Content from './components/Content';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [loaded, setLoaded] = useState(true);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    personService.getAll().then((personsList) => setPersons(personsList));
  }, []);

  const addNewName = (event) => {
    event.preventDefault();
    const exist = persons.some((person) => {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`);
        return true;
      }
      return false;
    });

    if (!exist) {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const onChange = (event) => {
    setNewName(event.target.value);
  };

  const onChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
    const result = persons.filter((person) => {
      if (searchValue === '') {
        setLoaded(true);
      } else if (
        person.name.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        setLoaded(false);
        return person;
      }
    });
    setFiltered(result);
  };

  return (
    <div>
      <Form
        addNewName={addNewName}
        onChange={onChange}
        onChangeNumber={onChangeNumber}
        newName={newName}
        newNumber={newNumber}
        searchValue={searchValue}
        onChangeSearch={onChangeSearch}
      />
      {loaded ? <Content persons={persons} /> : <Content persons={filtered} />}
    </div>
  );
};

export default App;
