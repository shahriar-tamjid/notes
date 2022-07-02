import React from "react";
import ReactDOM from "react-dom";
// If we want to use styles from global css then we need to import that css file
import './index.css';
// We need to import the components we want to use in this file
import App from './App';

/*
Introductory Note
We would insert our react application into the <div> which has "root" class in index.html file.
And that happens in index.js file. It is basically the entry point of the react app.

The ReactDOM allows us to interact with the DOM of the browser. We can render our code straight into the browser by using .render() method of the ReactDOM
There are two arguments for .render() method. First one is what we need to show in the browser and Second one is where we need to show.
We need to specify the location by selecting the class name or id from the HTML file.
*/

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById('root')
);

/*
But we don't want to render that way, it will break the system.
We need to render our App component in that first argument and put all the other components inside that App component.
Our main App component will be the App.js file.
*/

/*
There is a strict mode in React that offers additional checks and warnings within our applications.
To enable the strict mode we need to wrap our App component inside the React.StrictMode component.
*/