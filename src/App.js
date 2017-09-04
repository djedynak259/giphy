import React, { Component } from 'react';
import SearchBar from './Components/SearchBar.js'
import GiphyLoader from './Components/GiphyLoader.js'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search:''
    }

    this.searchSubmit = this.searchSubmit.bind(this);
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
          <SearchBar
            onSubmitTextInput={this.searchSubmit}
          />
        </div>
        <GiphyLoader keyword={this.state.search}
                      />
      </div>
    );
  }
}

export default App;
