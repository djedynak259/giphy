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
      <li>
        <img  src={e.images.downsized.url} alt=''/>
        <div className='imgInfo'>
        <button onClick={this.handleToggleClick}>
                    <div className="logoOverflowCheck">
            <div className="logoEffect"></div>
          </div>
        {this.state.show === false ? 'Show More' : 'Show Less'}</button>
          {this.state.show ? (<div className='infoWrap'>
            <p>Source: {e.source_tld}</p>
            <p>UserName: {e.username}</p>
            <p>Rating: {e.rating}</p>
            </div>
          ) : (<div></div>)}
        </div>
      </li> 
    );
  }
}

export default ListItem