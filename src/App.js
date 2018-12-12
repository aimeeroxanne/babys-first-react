import React, { Component } from 'react';
import ListItem from './components/listitem.js'
import todos from './data.js'

class App extends Component {

  render() {
    console.log(todos)
    return (
      <ul>
        {todos.map((item, idx) => {
          return <ListItem
            key={idx}
            todo={item.todo}
            time={item.time}
          />}
        )}
      </ul>
    );
  }
}

export default App;
