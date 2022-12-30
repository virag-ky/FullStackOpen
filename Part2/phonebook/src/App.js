import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Content from './components/Content';

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

  React.useEffect(() => {
    const results = persons.filter((person) =>
      person.name.includes(searchValue.toUpperCase() && searchValue)
    );
    const copy = results.map((result) => {
      return { name: result.name, number: result.number, id: result.id };
    });
    setFiltered(copy);
  }, [searchValue]);

  return (
    <div>
      <Form
        addNewName={addNewName}
        onChange={onChange}
        onChangeNumber={onChangeNumber}
        newName={newName}
        newNumber={newNumber}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Content filtered={filtered} persons={persons} />
    </div>
  );
};

export default App;
