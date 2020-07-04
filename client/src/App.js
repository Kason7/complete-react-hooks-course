import React, { useState } from 'react';
import './App.scss';

// Import components
import NameTag from './components/nameTag';
import Input from './components/Input';

const initialNames = [{ name: 'Jilly' }, { name: 'Joan' }, { name: 'James' }];
const changedNames = [{ name: 'Birger' }, { name: 'Børge' }, { name: 'Benny' }];
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

  // Component body
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 onClick={changeName}>Name List</h1>
        <NameTag firstname={name[0].name} lastname='Jorgenson' />
        <NameTag firstname={name[1].name} lastname='Americason' />
        <NameTag firstname={name[2].name} lastname='Joanson' />
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
