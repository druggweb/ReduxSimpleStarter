import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyA7ws4KTOlQIDq33GMSDwAzO11qT2Lu83I'

// Create a new component. This component should produce some HTML. This is the parent component.
class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] }

    YTSearch({ key: API_KEY, term: 'iPad' }, (videos) => {
      this.setState({ videos }) // Same as this.setState({ videos: videos }) 
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos [0]} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
