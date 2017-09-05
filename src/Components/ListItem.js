import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);

  }

  handleToggleClick() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  
  render() {
  let e = this.props.load;

    return (
      <li key={e.images.downsized.url.toString()} >
        <img  src={e.images.downsized.url}/>
        <div className='imgInfo'>
        <button onClick={this.handleToggleClick}>
                    <div className="logoOverflowCheck">
            <div className="logoEffect"></div>
          </div>
        Show More</button>
          {this.state.show ? (<div>
            Source: {e.source_tld}</div>
          ) : (<div></div>)}
        </div>
      </li> 
    );
  }
}

export default ListItem