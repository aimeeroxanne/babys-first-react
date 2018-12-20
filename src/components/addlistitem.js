import React, { Component } from 'react';

class AddListItem extends Component {

  render(){
    return(
      <form className="needs-validation">
        <div className="form-group">
            <input 
              type="text"
              className="form-control"
              onChange={this.props.updateTodo} 
              required>
            </input>
        </div>
        <button 
          type="submit"
          className="btn-dark"
          onClick={this.props.addTodo}>Add Todo</button>
      </form>
    )
  }
}

export default AddListItem
