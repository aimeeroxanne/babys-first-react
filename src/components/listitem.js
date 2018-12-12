import React, { Component } from 'react';

class ListItem extends Component {

  render(){
    console.log("Props", this.props)
    return(
      <li>{this.props.todo} {this.props.time}</li>
    )
  }
}

export default ListItem
