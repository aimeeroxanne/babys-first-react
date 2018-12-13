import React, { Component } from 'react';
import List from './components/list.js'
import todos from './data.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: todos
    }
  }

  render() {
    return (
      <List todos={this.state.todos}/>
    );
  }
}

export default App;
