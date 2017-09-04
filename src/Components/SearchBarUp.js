import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(e) {
    this.props.onSubmitTextInput(this.props.filterText)
    e.preventDefault()
  }

  handleChange(e) {
    this.props.handleChange(e.target.value);
  }
  
  render() {
    return (
      <form className='searchForm' onSubmit={this.handleSubmit}>
        <input
          className='searchInput'
          type="text"
          placeholder="Search Ingredients"
          value={this.props.filterText}
          onChange={this.handleChange}/>
          <input type='submit' value='Submit'/>
      </form>
    );
  }
}

export default SearchBar