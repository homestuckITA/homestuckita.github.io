
//Generic video player - for uninteractive flashes

window.onload = function() {

  // Prefix for images & stuff
  var Prefix = "https://homestuckITA.github.io/new animations/general/";

  var Video = document.getElementById("video");
  var Audio = document.getElementById("audio");
  var InteractDiv = document.getElementsByClassName("interact")[0];

  var LoadingState = 0;

  var PlayAgain = document.createElement("img");
  PlayAgain.setAttribute("src", Prefix + "arrow.png");
  PlayAgain.setAttribute("id", "replay");

  var Volume = document.createElement("img");
  Volume.setAttribute("src", Prefix + "volumefull.png");
  Volume.setAttribute("id", "volume");
  var VolumeState = 0;

  LoadingScreen = document.createElement("img");
  LoadingScreen.setAttribute("style", "position:absolute; top:0px; left:0px;");
  LoadingScreen.setAttribute("src", Prefix + "loadingbg.gif");

  InteractDiv.appendChild(LoadingScreen);

  LoadingButton = document.createElement("img");
  LoadingButton.setAttribute("src", Prefix + "start.png");
  LoadingButton.setAttribute("style", "position:absolute; top:365px; left:220.5px;cursor:pointer;");

  LoadingProgressVideo = document.createElement("p");
  LoadingProgressVideo.setAttribute("style", "position:absolute; top:370px; left:0; width:100%; color:black; text-align:center;");

  LoadingProgressAudio = document.createElement("p");
  LoadingProgressAudio.setAttribute("style", "position:absolute; top:390px; left:0; width:100%; color:black; text-align:center;");

  /* LOADING SUBVIDEOS */

  var AudioRequest = new XMLHttpRequest();
  var VideoRequest = new XMLHttpRequest();

  var VideoBlob, AudioBlob;

  var AudioURL = Audio.getAttribute("filesrc");
  var VideoURL = Video.getAttribute("filesrc");

  AudioRequest.open('GET', AudioURL, true);
  VideoRequest.open('GET', VideoURL, true);
  AudioRequest.responseType = "blob";
  VideoRequest.responseType = "blob";
  AudioRequest.send();
  VideoRequest.send();

  InteractDiv.appendChild(LoadingProgressVideo);
  InteractDiv.appendChild(LoadingProgressAudio);

  AudioRequest.addEventListener("progress", (event)=>{
    if(event.lengthComputable) {
      LoadingProgressAudio.innerHTML = `Audio: ${Math.ceil(event.loaded/event.total * 100)}% (${event.loaded}/${event.total})`;
    } else {
      LoadingProgressAudio.innerHTML = `Audio: ??%`
    }
  }, false);

  VideoRequest.addEventListener("progress", (event)=>{
    if(event.lengthComputable) {
      LoadingProgressVideo.innerHTML = `Video: ${Math.ceil(event.loaded/event.total * 100)}% (${event.loaded}/${event.total})`;
    } else {
      LoadingProgressVideo.innerHTML = `Video: ??%`
    }
  }, false);

  AudioRequest.addEventListener("load", (event)=>{
      var Blob = AudioRequest.response;
      AudioBlob = URL.createObjectURL(Blob);
      LoadingState++;
  }, false);

  VideoRequest.addEventListener("load", (event)=>{
      var Blob = VideoRequest.response;
      VideoBlob = URL.createObjectURL(Blob);
      LoadingState++;
  }, false);

  var CheckLoadInterval = window.setInterval(CheckLoadStatus, 250);

  function CheckLoadStatus() {
    if(LoadingState >= 2) {
      window.clearInterval(CheckLoadInterval);
      Video.src = VideoBlob;
      Audio.src = AudioBlob;
      InteractDiv.removeChild(LoadingProgressVideo);
      InteractDiv.removeChild(LoadingProgressAudio);
      InteractDiv.appendChild(LoadingButton);
      LoadingButton.setAttribute("class", "startvideo");
      LoadingButton.addEventListener("click", function(){
        InteractDiv.removeChild(LoadingButton);
        InteractDiv.removeChild(LoadingScreen);
        InteractDiv.appendChild(Volume);
        Audio.currentTime = 0;
        Video.currentTime = 0;
        Audio.play();
        Video.play();
      });
    }
  }

  Video.addEventListener("ended",function() {
    InteractDiv.appendChild(PlayAgain);
  });

  PlayAgain.addEventListener("click", function( event ) {   
    Video.play();
    Audio.currentTime = 0;
    Audio.play();
    InteractDiv.removeChild(PlayAgain);
  });

  Volume.addEventListener("click", function( event ) {   
    VolumeState++;
    if(VolumeState > 3) {
      VolumeState = 0;
    }
    switch(VolumeState) {
      case 0: //Full
        Volume.setAttribute("src", Prefix + "volumefull.png");
        Audio.volume = 1;
        break;
      case 1: //67%
        Volume.setAttribute("src", Prefix + "volumemute.png");
        Audio.volume = 0;
        break;
      case 2: //33%
        Volume.setAttribute("src", Prefix + "volume33.png");
        Audio.volume = 0.33;
        break;
      case 3: //Muted
        Volume.setAttribute("src", Prefix + "volume67.png");
        Audio.volume = 0.67;
        break;
    }
  });
}
