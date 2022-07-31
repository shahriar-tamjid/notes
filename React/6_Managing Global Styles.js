////////////  App.js  ////////////

import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {

  const [feedback, setFeedback] = useState(FeedbackData); // passing default values from feedbackData file

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
        {/* Getting data that are passed in the state by using its first parameter */}
      </div>
    </>
  );
}

export default App;

////////////  FeedbackData.js  ////////////

const FeedbackData = [
    {
        id: 1,
        rating: 10,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, molestiae nisi, soluta tempore explicabo inventore numquam recusandae labore odio aliquam sequi non asperiores aspernatur placeat? Eos, aperiam aliquid. Ut, nam?",
      },
      {
        id: 2,
        rating: 9,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, molestiae nisi, soluta tempore explicabo inventore numquam recusandae labore odio aliquam sequi non asperiores aspernatur placeat? Eos, aperiam aliquid. Ut, nam?",
      },
      {
        id: 3,
        rating: 8,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, molestiae nisi, soluta tempore explicabo inventore numquam recusandae labore odio aliquam sequi non asperiores aspernatur placeat? Eos, aperiam aliquid. Ut, nam?",
      }
];

export default FeedbackData;

////////////  FeedbackList.jsx  ////////////

import React from 'react'
import FeedbackItem from './FeedbackItem';

function FeedbackList({feedback}) {

    if(!feedback || feedback.length === 0) {
        return <h3>No Feedback Yet!</h3>
    }

  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
        ))}
    </div>
  )
}

export default FeedbackList;

////////////  FeedbackItem.jsx  ////////////

// As we are passing data through props we don't need the state in this file now
// So we just pass that prop and use it

function FeedbackItem({item}) {
  return (
    <div className="card">
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </div>
  )
}

export default FeedbackItem;