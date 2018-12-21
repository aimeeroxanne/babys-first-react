import React, { Component } from 'react';

class ListItem extends Component {

  render(){
    return(
      <li>{this.props.priority} {this.props.task} {this.props.due}</li>
    )
  }
}

export default ListItem
