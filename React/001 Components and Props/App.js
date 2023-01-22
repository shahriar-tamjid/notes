import React from 'react';

export function App() {
  return (
    <div className='App'>
      <Job jobTitle="Principal Software Engineer" comapany="Microsoft" salary={100000} />
      <Job jobTitle="Junior Software Developer" comapany="Netflix" salary={60000} />
      <Job jobTitle="Software Architect" comapany="Google" salary={120000} />
    </div>
  );

  // Creating a Job component that takes props
  function Job(props) {
    return (
      <div>
        <h1>{props.jobTitle}</h1>
        <h2>{props.comapany}</h2>
        <h3>{props.salary}</h3>
    </div>
    );
  }
}
