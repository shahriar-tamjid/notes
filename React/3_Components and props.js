// All the components that we want to create will go inside the "components" folder.
// "components" folder must stay inside the "src" folder.
// React components can either have .js extension or .jsx extension


////////////// Method-1: Component.jsx //////////////

// We can make props available in the component by passing them as a parameter in their function.
// And when we call that prop inside the functional component the prop will render the argument which was passed from the component declaration.

// This is component definition
function Header(prop) {
  return (
    <header>
        <div className="container">
            <h2>Feedback App</h2>
            <h4>{prop.text}</h4>
        </div>
    </header>
  )
}

export default Header;

////////////// Method-1: App.js //////////////

import Header from "./components/Header";

function App() {
  return (
    <>
      {/* This is component decalaration */}
      <Header text="Hello World!" />
      {/* props are the properties of components. We can name them as we wish. Here "text" is a prop */}
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  );
}

export default App;



////////////// Method-2: Component.jsx //////////////

// We can directly specify our prop name using curly braces {} inside the parameter section of the component
// In that way we don't need to use the "prop" keyword as an object to call the actual prop.

// This is component definition
function Header({ text }) {
  return (
    <header>
        <div className="container">
            <h2>Feedback App</h2>
            <h4>{text}</h4>
        </div>
    </header>
  )
}

export default Header;

////////////// Method-2: App.js //////////////

import Header from "./components/Header";

function App() {
  return (
    <>
      {/* This is component decalaration */}
      <Header text="Hello World!" />
      {/* props are the properties of components. We can name them as we wish. Here "text" is a prop */}
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  );
}

export default App;



////////////// Method-3: Component.jsx //////////////

// If we don't pass any prop from the calling file, we can still use prop in component file.
// That is because we have something called default props which we can set manually in the component file

// This is component definition
function Header({ text }) {
  return (
    <header>
        <div className="container">
            <h2>Feedback App</h2>
            <h4>{text}</h4>
        </div>
    </header>
  )
}

// Here is the default props for the component
Header.defaultProps = {
    text: 'Hello World!',
}

export default Header;

////////////// Method-3: App.js //////////////

import Header from "./components/Header";

function App() {
  return (
    <>
      {/* This is component decalaration */}
      <Header />
      {/* props are the properties of components. We can name them as we wish. Here "text" is a prop */}
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  );
}

export default App;



// Prop Types

// Prop Types is basically the type checking for the props
// we can specify if it should be a string, a number or a function
// To do that we need to import Prop Types. The shortcut is "impt"
import PropTypes from 'prop-types'


// This is component definition
function Header({ text }) {
  return (
    <header>
        <div className="container">
            <h2>Feedback App</h2>
            <h4>{text}</h4>
        </div>
    </header>
  )
}

// Here is the default props for the component
Header.defaultProps = {
    text: 'Hello World!',
}

// Here is how we can setup a Prop Type
Header.prototype = {
    text: PropTypes.string,
    // We are setting our prop type to string. If we pass anything else we will get an error in console
}

export default Header;
