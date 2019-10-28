var storageLength;
var videoID;
var inputMode = document.querySelector('input[name="sel"]:checked').value;

function Moment(id, start, end) {
	this.id = id;
	this.start = start;
	this.end = end;
}

function updateMode() {
	let mode = document.querySelector('input[name="sel"]:checked').value;
	if (mode == "list") {
		document.getElementById("selection").disabled = false;
		document.getElementById("search").disabled = false;
		document.getElementById("youtubeIDtext").hidden = true;
		document.getElementById("youtubeID").hidden = false;
	}
	else {
		document.getElementById("selection").disabled = true;
		document.getElementById("search").disabled = true;
		document.getElementById("youtubeIDtext").hidden = false;
		document.getElementById("youtubeID").hidden = true;
	}
}


var vID;
var loaded = false;
var start = Number(document.getElementById("start").value)
var end = Number(document.getElementById("end").value)
// 2. This code loads the IFrame Player API code asynchronously, call to create
function clip() {
//debugger;
start = Number(document.getElementById("start").value)
end = Number(document.getElementById("end").value)

let mode = document.querySelector('input[name="sel"]:checked').value;
//let videoID;
if (mode == "list") {
	videoID = document.getElementById("youtubeID").value
}
else {
	videoID = document.getElementById("youtubeIDtext").value
}

if (start > end) {
	alert("Start time cannot be greater than end time!");
	return;
}
if (start < 0 || end < 0) {
	alert("Start and end time cannot be less than zero!");
	return;
}

if (loaded == false) {
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  loaded = true;
}
else {
	player.loadVideoById({videoId: videoID,
							startSeconds: start, endSeconds: end});
}
}

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
  height: '390',
  width: '640',
  videoId: videoID,
  playerVars: {
	start: start
  },
  events: {
	'onReady': onPlayerReady,
	'onStateChange': onPlayerStateChange
  }
});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.PLAYING && !done) {
  setTimeout(stopVideo, (end - start) * 1000);
  done = true;
}
}
function stopVideo() {
player.stopVideo();
}

function search() {
//console.log(document.getElementById("selection").value);
var request = gapi.client.youtube.search.list({
	part: "snippet",
	type: "video",
	q: document.getElementById("selection").value, //encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
	maxResults: 3,
	order: "viewCount",
	publishedAfter: "2015-01-01T00:00:00Z"
}); 
// execute the request
request.execute(function(response) {
  var results = response.result;
  console.log(results);
  console.log(results.items.length);
  var idList = document.getElementById("youtubeID");
  for (let i = 0; i < results.items.length; i++) {
	var newId = document.createElement("option");
	newId.text = results.items[i].id.videoId;
	idList.add(newId);
	console.log(results.items[i].snippet.title + " VideoID: " +  results.items[i].id.videoId);
  }
});
}

function init() {
updateMode();
console.log("init called")
gapi.client.setApiKey("AIzaSyDAEuc_rNhG4RWc7oPtsn5KDSueiO2TsjM");
gapi.client.load("youtube", "v3", function() {
	// yt api is ready
	console.log("ready");
});
}
