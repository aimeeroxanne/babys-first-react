import React, { Component } from 'react';
import AddListItem from './components/addlistitem.js'
import List from './components/list.js'
import todos from './data.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      newTodo: "",
      todos: todos
    }
  }

  updateTodo = (event) => {
    console.log("this", this)
    this.setState({
      newTodo: event.target.value
    })
  }

  render() {
    return (
      <div>
        <AddListItem updateTodo={this.updateTodo}></AddListItem>
        <List todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
