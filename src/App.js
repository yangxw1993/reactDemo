import React, { Component } from 'react';
import Person from './components/Person/Person'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World, React</h1>
        <Person name="杨小伟"/>
        <Person name="Chris Yang">初来乍到,请多多观照!</Person>
      </header>
    </div>
  );
}

export default App;
