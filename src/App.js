import React, { Component } from 'react';
import AddListItem from './components/addlistitem.js'
import List from './components/list.js'
import todos from './data.js'

class App extends Component {

  constructor() {
    super() 
    this.state = {
      newTodo: "",
      todos: []
    }
  }

  updateTodo = (event) => {
    // console.log("value", event.target.value)
    this.setState({
      newTodo: event.target.value
    }) 
  }

  componentDidMount(){
    fetch('http://localhost:8000/')
      .then(response => response.json())
        .then(response => {
          this.setState({todos: response})
          console.log(response)
          return response
        })
  }

  addTodo = (event) => {
    event.preventDefault()
    if(this.state.newTodo.length === 0){
      alert('NO TODO NO LIST')
    } 
    else {
      let todo = {
        todo: this.state.newTodo,
      }
      this.setState({
        todos: [...this.state.todos, todo]
      })
  }
  }

  render() {
    return (
      <div>
        <AddListItem 
          updateTodo={this.updateTodo}
          addTodo={this.addTodo}/>
        <List 
          todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
