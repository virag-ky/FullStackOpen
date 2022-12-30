import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
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
      setPersons(persons.concat({ name: newName, number: newNumber }));
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

  React.useEffect(() => {
    const results = persons.filter((person) =>
      person.name.includes(searchValue.toUpperCase())
    );
    const copy = results.map((result) => {
      return { name: result.name, number: result.number, id: result.id };
    });
    setFiltered(copy);
  }, [searchValue]);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with{' '}
        <input
          type="search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={onChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={onChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filtered.length !== 0
        ? filtered.map((person) => (
            <p key={person.id}>
              {person.name} {person.number}
            </p>
          ))
        : persons.map((person) => (
            <p key={person.id}>
              {person.name} {person.number}
            </p>
          ))}
    </div>
  );
};

export default App;
