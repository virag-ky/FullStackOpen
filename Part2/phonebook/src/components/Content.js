import Info from './Info';

const Content = ({ filtered, persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {filtered.length !== 0
        ? filtered.map((person) => (
            <Info key={person.id} name={person.name} number={person.number} />
          ))
        : persons.map((person) => (
            <Info key={person.id} name={person.name} number={person.number} />
          ))}
    </div>
  );
};

export default Content;
