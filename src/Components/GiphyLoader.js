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
  constructor(props) {
    super(props);
  }
  
  render() {

    let url = `http://api.giphy.com/v1/gifs/search?q=${this.props.keyword}&api_key=a5c163ee9c29473580e365c6cc226a99&limit=6`;

    get(url).then(function(text) {
        console.log(text[0].images.downsized)
        console.log(JSON.parse(text));
      }, function(error) {
        console.log("Failed to fetch data.txt: " + error);
    })

    return (
      <div>
        test
      </div> 
    );
  }
}

export default GiphyLoader