function Video({title="Default Title", channel="Default Channel", views, time}) { 
// We can give default values here. If any prop gets missing from the app then this default value will get used

	return (
		<>
			<div className="container">
				<div className="pic">
					<img src="http://placeimg.com/160/90/any" alt="Thumbnail"/>
				</div>
				<div className="title">{title}</div>
				<div className="channel">{channel}</div>
				<div className="views">
					{views} views <span>.</span> {time}
				</div>
			</div>
		</>
	);
};

export default Video;


// ================= Using Video component with props inside App.js ================= \\

import Video from "./components/Video";

function App() {
	return (
		<div>
			<div>Videos</div>
			<Video title="React.JS Tutorial" channel="Shahriar Develops" views="20K" time="1 month ago" />
		</div>
	);
};

// ================= If the received data is in object format then we can use spread operator to place the properties inside of the component ================= \\

import Video from "./components/Video";

function App() {
	// data in object format
	let obj = {
		title: "React.JS Tutorial",
		channel: "Shahriar Develops",
		views: "99K",
		time: "1 year ago",
	};
	return (
		<div>
			<div>Videos</div>
			<Video {...obj} /> // using spread operator to destructure properties
		</div>
	);
};
