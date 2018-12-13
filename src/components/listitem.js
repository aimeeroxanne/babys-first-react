import React, { Component } from 'react';

class ListItem extends Component {

  render(){
    return(
      <li>{this.props.todo} {this.props.time}</li>
    )
  }
}

export default ListItem
