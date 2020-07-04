import React, { useState } from 'react';
import './App.scss';

// Import components
import NameTag from './components/nameTag';
import Input from './components/Input';

const initialNames = [
  { name: 'Jilly', lastname: 'Jorgenson' },
  { name: 'Joan', lastname: 'Americason' },
  { name: 'James', lastname: 'Joanson' },
];
const changedNames = [
  { name: 'Birger', lastname: 'Halløjson' },
  { name: 'Børge', lastname: 'Jepson' },
  { name: 'Benny', lastname: 'Nopeson' },
];
let nameToggler = false;

function App() {
  // Initial state for names
  const [name, setName] = useState(initialNames, nameToggler);
  // State methods
  const changeName = () => {
    nameToggler = !nameToggler;

    setName(nameToggler ? changedNames : initialNames);
    console.log(nameToggler);
  };

  // Initial state for age
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

  // Map over name tag list items
  const nameTags = () =>
    name.map((nameTagContent, index) => {
      return (
        <NameTag
          key={index}
          firstname={nameTagContent.name}
          lastname={nameTagContent.lastname}
        />
      );
    });

  // Component body
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 onClick={changeName}>Name List (Click me)</h1>
        {nameTags()}
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
