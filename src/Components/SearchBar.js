import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }
  
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }
  
  render() {
    return (
      <form className='searchForm'>
        <input
          className='searchInput'
          type="text"
          placeholder="Search Ingredients..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}/>
      </form>
    );
  }
}

export default SearchBar