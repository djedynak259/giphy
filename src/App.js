import React, { Component } from 'react';
import SearchBar from './Components/SearchBar.js'
import GiphyLoader from './Components/GiphyLoader.js'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search:'',
      random: false
    }

    this.searchSubmit = this.searchSubmit.bind(this);
    this.randomSubmit = this.randomSubmit.bind(this);
  }

  searchSubmit(e) {
    this.setState({
      search: e
    })
  }

  randomSubmit(e) {
    this.setState({
      random: true
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Giphy Generator</h2>
          <SearchBar
            onSubmitTextInput={this.searchSubmit}
            onRandom={this.randomSubmit}
          />
        </div>
        <GiphyLoader keyword={this.state.search}
                      random={this.state.random}
                      />
      </div>
    );
  }
}

export default App;
