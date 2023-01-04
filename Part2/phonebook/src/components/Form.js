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
      <div>
        Filter shown with{' '}
        <input type="search" value={searchValue} onChange={onChangeSearch} />
      </div>
      <h2>Add new</h2>
      <form onSubmit={addNewName}>
        <div>
          Name: <input value={newName} onChange={onChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={onChangeNumber} />
        </div>
        <div>
          <button type="submit">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
