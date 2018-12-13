import React, { Component } from 'react';
import AddTodoForm from './components/addtodoform.js'
import List from './components/list.js'
import todos from './data.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: todos,
      newTodo: ""
    }
  }

  inputChange = (event) => {
    console.log("input changed", event.target.value)
    this.setState({
      newTodo: event.target.value
    })
  }

  render() {
    return (
      <div>
        <AddTodoForm inputChange={this.inputChange}></AddTodoForm>
        <List todos={this.state.todos}></List>
      </div>
    );
  }
}

export default App;
