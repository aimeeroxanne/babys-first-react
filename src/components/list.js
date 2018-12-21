import React, { Component } from 'react';
import ListItem from './listitem.js'

class List extends Component {

  render(){
    return(
        <ul>
        {this.props.todos.map((item, idx) => {
          return <ListItem
            key={idx}
            task={item.task}
            priority={item.priority}
            due={item.due}
          />}
        )}
      </ul>
    )
  }
}

export default List
