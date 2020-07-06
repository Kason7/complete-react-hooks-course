import React from 'react';
import './App.scss';

// Import components
import NameTag from './components/nameTag';
import Input from './components/Input';
import Lifecycle from './components/Lifecycle';
import Timer from './components/Timer';
import FetchGithub from './components/FetchGithub';
import MemoExample from './components/MemoExample';

// Data
const nameTagData = [
  { firstname: 'Jill', lastname: 'Jorgenson' },
  { firstname: 'Joan', lastname: 'Americason' },
  { firstname: 'James', lastname: 'Joanson' },
  { firstname: '', lastname: '' },
];

function App() {
  // Map function for name tags
  const NameTags = () =>
    nameTagData.map((nameTag, index) => {
      return (
        <div className='name-tag-container' key={index}>
          <NameTag firstname={nameTag.firstname} lastname={nameTag.lastname} />
        </div>
      );
    });

  // Component body
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Course Resources</h1>
        <div className='course-resource-container'>
          <div>
            <h2>Name List</h2>
            {NameTags()}
            <Input placeholder='Enter here' type='text' />
            <MemoExample />
          </div>
          <div>
            <Lifecycle />
            <Timer />
            <FetchGithub />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
