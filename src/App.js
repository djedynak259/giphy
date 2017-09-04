import React, { Component } from 'react';
import SearchBar from './Components/SearchBar.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: ''
    }

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <SearchBar filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput}
          />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
