import React, { Component } from 'react';

class AddListItem extends Component {

  render(){
    return(
        <div>
            <input onChange={this.props.updateTodo}></input>
            <button></button>
        </div>
    )
  }
}

export default AddListItem
