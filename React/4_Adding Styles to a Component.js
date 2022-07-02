////////////// Component.jsx //////////////

// Here is how we can apply specific styling to a particular component

import PropTypes from "prop-types";

// This is component definition
function Header({ text, bgColor, textColor }) {

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// Here is the default props for the component
Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

// Here is how we can setup a Prop Type
Header.prototype = {
  text: PropTypes.string,
  // We are setting our prop type to string. If we pass anything else we will get an error in console
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;


////////////// App.js //////////////

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
