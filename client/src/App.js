import React from 'react';
import logo from './logo.svg';
import './App.scss';

// Import components
import NameTag from './components/nameTag';
import Input from './components/Input';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Name List</h1>
        <NameTag firstname='Jilly' lastname='Jorgenson' />
        <NameTag firstname='Joan' lastname='Americason' />
        <NameTag firstname='James' lastname='Joanson' />
        <NameTag />
        <Input placeholder='Enter here' type='text' />
      </header>
    </div>
  );
}

export default App;
