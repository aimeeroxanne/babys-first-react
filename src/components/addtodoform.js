import React, { Component } from 'react';
import ListItem from './listitem.js'

class App extends Component {

  render() {
    return (
        <form>
            <input onChange={this.props.inputChange}></input>
        </form>
    );
  }
}

export default App;
