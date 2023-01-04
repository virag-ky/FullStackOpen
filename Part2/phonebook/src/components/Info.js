const Info = ({ name, number, deletePerson, id }) => {
  return (
    <div>
      {name} {number}
      <button onClick={() => deletePerson(id, name)}>Delete</button>
    </div>
  );
};

export default Info;
