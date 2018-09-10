import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

const App = () => (
  <div className="App">
    <header className="App-header">
      <nav>Home</nav>
      <nav>About</nav>
      <nav>Blog</nav>
      <Navbar>
        {(
          { on, toggle },
        ) => (
          <div>
            {on && (
            <div>
              <nav>Home</nav>
              <nav>About</nav>
              <nav>Blog</nav>
            </div>
            )}
            <button type="button" onClick={toggle}>Show/Hide</button>
          </div>
        )}
      </Navbar>
    </header>
    <h1 className="App-title">Welcome to React</h1>
    <img src={logo} className="App-logo" alt="logo" />
    <p className="App-intro">
          To get started, edit
      {' '}
      <code>src/App.js</code>
      {' '}
and save to reload.
    </p>
  </div>
);

export default App;
