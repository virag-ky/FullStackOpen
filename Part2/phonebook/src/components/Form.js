const Form = ({
  newName,
  newNumber,
  onChange,
  onChangeNumber,
  addNewName,
  searchValue,
  onChangeSearch,
}) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with{' '}
        <input type="search" value={searchValue} onChange={onChangeSearch} />
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
    </div>
  );
};

export default Form;
