import React, { useState } from 'react';
import './App.scss';

// Import components
import NameTag from './components/nameTag';
import Input from './components/Input';

function App() {
  // Initial state
  const [age, setAge] = useState(21);
  // State methods
  const ageUp = () => {
    const newAge = age + 1;
    setAge(newAge);
  };
  const ageDown = () => {
    const newAge = age - 1;
    setAge(newAge);
  };

  // Component body
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Name List</h1>
        <NameTag firstname='Jilly' lastname='Jorgenson' />
        <NameTag firstname='Joan' lastname='Americason' />
        <NameTag firstname='James' lastname='Joanson' />
        <NameTag />
        <Input placeholder='Enter here' type='text' />
        <button onClick={ageDown}>-</button>
        <h2>Age: {age}</h2>
        <button onClick={ageUp}>+</button>
        <hr />
      </header>
    </div>
  );
}

export default App;
