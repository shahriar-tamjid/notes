import './App.css';

function App() {
  const age = 17;
  const isGreen = true;

  return (
    <div className="App">
      {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}

      {/* Inline CSS style */}
      <h1 style={{ color: isGreen ? "green" : "red" }}>This is color</h1>

      {isGreen && <button style={{backgroundColor: "green"}}>Green Button</button>}
    </div>
  );
}

export default App;
