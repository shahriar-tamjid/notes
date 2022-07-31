//////// FeedbackItem.jsx ////////

import {useState} from 'react';

// There are two parts in a state: 1. Destructured array & 2. Data returned by useState function
// Inside destructured array we need to put two elements: 1. argumentName 2. setArgumentName

function FeedbackItem() {

    const [rating, setRating] = useState(7);
    const [text, setText] = useState("Text from useState");

    const handleClick = () => {
        // Adds 1 to the previous rating
        setRating((prev) => {
            return prev + 1;
        });
    }

  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem;

//////// App.jsx ////////

import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
