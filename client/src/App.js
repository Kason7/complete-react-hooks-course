import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Prompt,
} from 'react-router-dom';
import './App.scss';

// Import components
import Home from './containers/Home';
import Lifecycle from './components/Lifecycle';
import Timer from './containers/Timer';
import FetchGithub from './containers/FetchGithub';
import MemoExample from './components/MemoExample';
import Nav from './components/Nav';
import MeasureElement from './containers/MeasureElement';
import CustomFetch from './containers/CustomFetch';
import AboutPage from './components/AboutPage';

// Import contexts
import messageContext from './context/messageContext';

function App() {
  // Loggedin state
  const [loggedIn, setLoggedIn] = useState(false);
  const [age, getAge] = useState(false);
  const [message, setMessage] = useState('I am being shared');

  const loginHandle = () => {
    setLoggedIn(!loggedIn);
  };

  const onAgeSetHandle = (event) => {
    getAge(event.target.value);
  };

  // Component body
  return (
    <BrowserRouter>
      <messageContext.Provider value={[message, setMessage]}>
        <div className='App'>
          <header className='App-header'>
            <Nav />
            <Prompt
              when={loggedIn && !age}
              message={(location) => {
                return location.pathname.startsWith('/user')
                  ? true
                  : 'Are you sure?';
              }}
            ></Prompt>
            <button onClick={loginHandle}>
              {!loggedIn ? 'Log In' : 'Log Out'}
            </button>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/lifecycle' component={Lifecycle} />
              <Route exact path='/timer' component={Timer} />
              <Route exact path='/fetch' component={FetchGithub} />
              <Route exact path='/memo' component={MemoExample} />
              <Route exact path='/measure' component={MeasureElement} />
              <Route exact path='/custom' component={CustomFetch} />
              <Route exact path='/about' component={AboutPage} />
              <Route
                exact
                path='/user'
                render={({ match }) => {
                  return <h1>Welcome User</h1>;
                }}
              />
              <Route
                exact
                path='/user/:firstname/:lastname'
                render={({ match }) => {
                  return loggedIn ? (
                    <div>
                      <h1>Age: {age}</h1>
                      <input
                        type='text'
                        placeholder='type your age'
                        value={age}
                        onChange={onAgeSetHandle}
                      ></input>
                      Welcome {match.params.firstname} {match.params.lastname}
                    </div>
                  ) : (
                    <Redirect to='/'></Redirect>
                  );
                }}
              />
            </Switch>
          </header>
        </div>
      </messageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
