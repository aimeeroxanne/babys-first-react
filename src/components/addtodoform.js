import React, { Component } from 'react';
import ListItem from './listitem.js'

class App extends Component {

  inputChange = (event) => {
      this.props.inputChange(event.target.value)
  }

  render() {
    return (
        <form>
            <input onChange={this.inputChange}></input>
        </form>
    );
  }
}

export default App;
