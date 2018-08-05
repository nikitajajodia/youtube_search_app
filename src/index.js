import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyDwcRiITHam06Iiqn6qA5_PHvH0nlGCxt4';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('surfboard');
	}

	videoSearch(term) {
		YTSearch({
			key: API_KEY,
			term: term
		}, (videos) => {
				// this.setState({ videos: videos }) is same as this.setState({ videos }) ES6
				this.setState({
					videos: videos,
					selectedVideo: videos[0]
					});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); //Throttle
		return (
			<div>
				<SearchBar
					onSearchTermChange ={videoSearch}
				/>
				<VideoDetail
					video={this.state.selectedVideo}
				/>
				<VideoList
					onVideoSelect = {selectedVideo => {this.setState({selectedVideo})}}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));