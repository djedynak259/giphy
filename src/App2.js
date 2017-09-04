import React, { Component } from 'react';
import SearchBar from './Components/SearchBar.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: '',
      search:''
    }

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
  }

  handleFilterTextInput(e) {
    this.setState({
      filterText: e
    });
  }

  searchSubmit(e) {
    this.setState({
      search: e
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Reacsdst</h2>
          <SearchBar filterText={this.state.filterText}
            handleChange={this.handleFilterTextInput}
            onSubmitTextInput={this.searchSubmit}
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
