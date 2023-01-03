import Info from './Info';

const Content = ({ persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Info key={person.id} name={person.name} number={person.number} />
      ))}
    </div>
  );
};

export default Content;
