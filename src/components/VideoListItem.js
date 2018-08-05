import React from 'react';

const VideoListItem = ({video, onVideoClick}) => {
	// const video = props.video; is equivalent to ({video}) (ES6)
	const imgUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;
	return (
		<li onClick={() => onVideoClick(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imgUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">
						{title}
					</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;