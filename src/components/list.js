import React, { Component } from 'react';
import ListItem from './listitem.js'

class App extends Component {

  render() {
    return (
      <ul>
        {this.props.todos.map((item, idx) => {
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
