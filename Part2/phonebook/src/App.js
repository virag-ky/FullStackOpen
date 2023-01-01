import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Content from './components/Content';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [filtered, setFiltered] = useState([]);

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
      const newId = persons.length + 1;
      setPersons(
        persons.concat({
          name: newName,
          number: newNumber,
          id: newId,
        })
      );
      setNewName('');
      setNewNumber('');
    }
  };

  const onChange = (event) => {
    setNewName(event.target.value);
  };

  const onChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const onChangeSearch = (event) => {
    const val = event.target.value;
    setSearchValue(val);
    const results = persons.filter((person) =>
      person.name.includes(searchValue.toUpperCase() && searchValue)
    );
    const copy = results.map((result) => {
      return { name: result.name, number: result.number, id: result.id };
    });
    setFiltered(copy);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((result) => {
      setPersons(result.data);
    });
  }, []);

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
      <Content filtered={filtered} persons={persons} />
    </div>
  );
};

export default App;
