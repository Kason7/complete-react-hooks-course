import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.scss';

// Import components
import Home from './containers/Home';
import NameTag from './components/nameTag';
import Input from './components/Input';
import Lifecycle from './components/Lifecycle';
import Timer from './containers/Timer';
import FetchGithub from './containers/FetchGithub';
import MemoExample from './components/MemoExample';
import Nav from './components/Nav';
import MeasureElement from './containers/MeasureElement';
import CustomFetch from './containers/CustomFetch';

// Import custom hooks
import usePrevious from './hooks/usePrevious';

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

function App() {
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
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/lifecycle' component={Lifecycle} />
            <Route exact path='/timer' component={Timer} />
            <Route exact path='/fetch' component={FetchGithub} />
            <Route exact path='/memo' component={MemoExample} />
            <Route exact path='/measure' component={MeasureElement} />
            <Route exact path='/custom' component={CustomFetch} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
