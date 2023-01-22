import "./App.css";

function App() {
  const names = ["Steve", "Dustin", "Max"];
  
  const friends = [
    { name: "Rachel", age: 27 },
    { name: "Monica", age: 28 },
    { name: "Joey", age: 29 },
    { name: "Chandler", age: 30 },
  ];

  const planets = [
    { name: "Earth", isGasPlanet: false },
    { name: "Mars", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ]


  return (
    <div className="App">
      {/* Looping through a list using the map function */}

      {names.map((value, key) => {
        return (
          <h1 key={key}>{`Hi, ${value}`}</h1>
        );
      })}

      {friends.map((value, key) => {
        return (
          <Friends key={key} name={value.name} age={value.age} />
        );
      })}

      {/* Only display the gas planets */}
      {planets.map((value, key) => {
        return (
          <div key={key}>
            {value.isGasPlanet && (
              <h1>{value.name}</h1>
            )}
          </div>
        );
      })}
    </div>
  );
}

const Friends = (props) => {
  return (
    <h2>{`Name: ${props.name}, Age: ${props.age}`}</h2>
  );
};

export default App;
