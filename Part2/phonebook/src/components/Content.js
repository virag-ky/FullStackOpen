import Info from './Info';

const Content = ({ persons, deletePerson }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Info
          key={person.id}
          deletePerson={deletePerson}
          name={person.name}
          number={person.number}
          id={person.id}
        />
      ))}
    </div>
  );
};

export default Content;
