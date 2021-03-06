import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(e) {
    this.props.onSubmitTextInput(this.state.value)
    e.preventDefault()
  }

  handleChange(e) {
    this.setState({
      value:e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <form className='searchForm' onSubmit={this.handleSubmit}>
          <input
            className='searchInput'
            type="text"
            placeholder="Search for Giphys"
            value={this.state.value}
            onChange={this.handleChange}/>
            <input className='searchButton'type='submit' value='Generate'/>
        </form>
      </div>
    );
  }
}

export default SearchBar