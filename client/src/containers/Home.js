import React, { useState } from 'react';
import '../App.scss';

// Import components
import NameTag from '../components/nameTag';
import Input from '../components/Input';
import Lifecycle from '../components/Lifecycle';
import FetchGithub from './FetchGithub';
import MemoExample from '../components/MemoExample';

// Import custom hooks
import usePrevious from '../hooks/usePrevious';

// Data
const nameTagData = [
  { firstname: 'Jill', lastname: 'Jorgenson' },
  { firstname: 'Joan', lastname: 'Americason' },
  { firstname: 'James', lastname: 'Joanson' },
  { firstname: '', lastname: '' },
];

const changedNames = [
  { firstname: 'Birger', lastname: 'Halløjson' },
  { firstname: 'Børge', lastname: 'Jepson' },
  { firstname: 'Benny', lastname: 'Nopeson' },
  { firstname: '', lastname: '' },
];
let nameToggler = false;

function Home() {
  // Initial state for names
  const [name, setName] = useState(nameTagData, nameToggler);
  // State methods
  const changeName = () => {
    nameToggler = !nameToggler;

    setName(nameToggler ? changedNames : nameTagData);
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

  // Map function for name tags
  const NameTags = () =>
    name.map((nameTag, index) => {
      return (
        <div className='name-tag-container' key={index}>
          <NameTag firstname={nameTag.firstname} lastname={nameTag.lastname} />
        </div>
      );
    });

  // State for usePrevious example
  const [age2, setAge2] = useState(21);
  const previousAge = usePrevious(age2);

  // Component body
  return (
    <>
      <h1>Course Resources</h1>
      <div className='course-resource-container'>
        <div>
          <h2>Name List</h2>
          <button onClick={changeName}>Change names</button>
          {NameTags()}
          <Input placeholder='Enter here' type='text' />

          <h2>Age: {age}</h2>
          <button onClick={ageUp}>+</button>
          <button onClick={ageDown}>-</button>
        </div>
        <div>
          <div>
            <h2>usePrevious Example</h2>
            <p>Current age: {age2}</p>
            <p>Previous age: {previousAge}</p>
            <button onClick={() => setAge2(age2 - 1)}>Make me younger</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
