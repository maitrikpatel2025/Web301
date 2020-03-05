import React, { useState, useEffect } from 'react';
import Dialog from './components/Dialog/Dialog';
import './App.css';

function App() {
  const [showDialog, setShowDialog] = useState(false);

  const [count, setCount] = useState(0);

  // You can use as many useEffects as you want
  useEffect(() => {
    // Runs after App renders or re-renders
    console.log('App component rendered or re-rendered');
  });

  // The second argument in useEffect is an array of variables
  // Any variable inside of the array of the second argument of useEffect
  // that changes will trigger the useEffect function

  // If the array is empty, the function in useEffect will only run
  // after the mount render
  useEffect(() => {
    console.log('This will run only after the mount render');
  }, []);

  useEffect(() => {
    console.log('This will run only after count updates.')
  }, [count]);

  return (
    <div className="container">
      <h1>Lifecycle and useEffect Demonstration</h1>
      <hr/>
      <button className="btn btn-primary" onClick={() => setShowDialog(true)}>Trigger Modal</button>
      <button className="btn btn-default" onClick={() => setCount(count + 1)}>Increment Count</button>
      {showDialog && <Dialog close={() => setShowDialog(false)} />}
    </div>
  );
}

export default App;
