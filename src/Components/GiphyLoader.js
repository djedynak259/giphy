import React, { Component } from 'react';
import ListItem from './ListItem.js';

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
      results: [],
      offset:0
    }
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.updateImages = this.updateImages.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidUpdate(a,b){
    if(a.keyword !== this.props.keyword || this.props.random){
      this.setState(prev =>({
          results: []
        }))
      this.updateImages()
    }
  }

  updateImages(){

    let url = `http://api.giphy.com/v1/gifs/search?q=${this.props.keyword}&api_key=a5c163ee9c29473580e365c6cc226a99&offset=${this.state.offset}&limit=6`;

      get(url).then(text=> {
        let arr = []
        console.log(JSON.parse(text))
        JSON.parse(text).data.forEach(e=>{
          arr.push(e)
        });
        this.setState(prev =>({
          results: prev.results.concat(arr)
        }))
        }, function(error) {
          console.log("Failed to fetch data.txt: " + error);
      })

  }

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.setState(prev =>({
          offset: (prev.offset + 6)
        }))
      this.updateImages();
    }  
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {

    let rows = [];

    if(this.state.results.length > 0) {
      let results = this.state.results
      console.log(results)
      results.forEach(e=>
      rows.push(<ListItem key={e.images.downsized.url.toString()} load={e}/>)
      )
    }
    return (
      <ul>
        {rows}
      </ul> 
    );
  }
}

export default GiphyLoader