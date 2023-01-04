const Info = ({ name, number, deletePerson, id }) => {
  return (
    <div>
      {name} {number}
      <button onClick={() => deletePerson(id)}>Delete</button>
    </div>
  );
};

export default Info;
