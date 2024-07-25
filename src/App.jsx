//imports the css app file
import './App.css'
//imports the state and function from react
import React, { useState } from 'react';
//create a funciton that sets a counter as '0'. It can then either increase the count by 1 or decrease by 1
const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
//this asks the function to display the state and the 2 available buttons that start 1 of 2 functions
  return (
    <div>
      <h1 className= "count">{count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
};


//the app is exported
export default App;
