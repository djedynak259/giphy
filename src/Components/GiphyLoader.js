import React, { Component } from 'react';

    function get(url){
      return new Promise(function(succeed,fail){
        var xhr = new XMLHttpRequest();
        xhr.open('get',url,true);
        xhr.addEventListener('load',function(){
          if(xhr.status < 400){
            succeed(xhr.responseText)
          } else fail(new Error('reQuest failed ' + xhr.statusText))
        })
        xhr.addEventListener('fail', function(){
          fail(new Error('Network error'))
        })
        xhr.send(null)
      })
    }

class GiphyLoader extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: null
    }
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps){

    let url = `http://api.giphy.com/v1/gifs/search?q=${this.props.keyword}&api_key=a5c163ee9c29473580e365c6cc226a99&limit=6`;

    get(url).then(text=> {
      this.setState({
        results: JSON.parse(text)
      })
    
        console.log(JSON.parse(text));
        console.log(this.state.results)
      }, function(error) {
        console.log("Failed to fetch data.txt: " + error);
    })

  }

  render() {
    const list = this.state.results ? this.state.results.data.map(e=>
        <li key={e.toString()}>
          {e.images.downsized.url}
        </li>
        ) : 'Search in Box'

    return (
      <ul>
        {list}
      </ul> 
    );
  }
}

export default GiphyLoader