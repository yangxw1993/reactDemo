import React, { Component } from 'react';
import Person from './components/Person/Person'
import './App.css';

class App extends Component {
  state = {
    person: [
      {name: '米斯特杨', age: 30},
      {name: 'Chris yang', age: 40},
      {name: 'Chris li', age: 50},
    ]
  }
  // switchName() {
  //   console.log(this.state.person)
  // }
  switchName = (name) => {
    console.log(this.state.person)
    this.setState({
      person: [
        {name: name, age: 30},
        {name: 'Chris yang', age: 40},
        {name: 'Chris li', age: 50},
      ]
    })
  }
  changeName = (e) => {
    this.setState({
      person: [
        {name: 'name', age: 30},
        {name: e.target.value, age: 40},
        {name: 'Chris li', age: 50},
      ]
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World, React</h1>
          {/*  箭头函数传值 
          <button onClick={ () => this.switchName('米修')}>更改状态值</button> */}
          <button onClick={ this.switchName.bind(this, 'bind传值米修')}>更改状态值</button>
          <Person changed={this.changeName} name={this.state.person[0].name}/>
          <Person
            myclick={this.switchName.bind(this, 'props传值米修')}
           name={this.state.person[1].name}/>
          <Person name={this.state.person[2].name}>初来乍到,请多多观照!</Person>
        </header>
      </div>
    );
  }
}

export default App;
