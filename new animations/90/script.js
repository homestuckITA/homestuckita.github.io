
//Page 90 - Dad is strifin'

window.onload = function() {
  var Videos = [];
  Videos[0] = document.getElementById("Intro");
  Videos[1] = document.getElementById("Loop");
  Videos[2] = document.getElementById("Aggress");
  Videos[3] = document.getElementById("Abjure");

  for(var i = 0; i < 4; i++) {
    Videos[i].style.position = "absolute";
    Videos[i].style.left = "0";
    //top:0;
  }

  //var Source = Video.firstElementChild; //todo:change into something more generic & adaptable
  var Audio = document.getElementById("audio");
  var Hitsound = document.getElementById("Hitsound");
  var InteractDiv = document.getElementsByClassName("interact")[0];

  var LoadingState = 0;
  var CurrentState = "Intro";

  var PlayAgain = document.createElement("img");
  PlayAgain.setAttribute("src", "https://homestuckITA.github.io/new animations/general/arrow.png");
  PlayAgain.setAttribute("id", "replay");

  var Volume = document.createElement("img");
  Volume.setAttribute("src", "https://homestuckITA.github.io/new animations/general/volumefull.png");
  Volume.setAttribute("id", "volume");
  var VolumeState = 0;

  LoadingScreen = document.createElement("img");
  LoadingScreen.setAttribute("style", "position:absolute; top:0px; left:0px;");
  LoadingScreen.setAttribute("src", "https://homestuckITA.github.io/new animations/general/loadingbg.gif");

  InteractDiv.appendChild(LoadingScreen);

  LoadingButton = document.createElement("img");
  LoadingButton.setAttribute("style", "position:absolute; top:370px; left:206px;");
  LoadingButton.setAttribute("src", "https://homestuckITA.github.io/new animations/general/loading.png");

  AggressButtonBlink = document.createElement("div");
  AggressButtonBlink.setAttribute("id", "AggressButtonBlink");
  AggressButton = document.createElement("img");
  AggressButton.setAttribute("id", "AggressButton");
  AggressButton.setAttribute("src", "https://homestuckITA.github.io/new animations/90/Aggress.png");

  AbjureButtonBlink = document.createElement("div");
  AbjureButtonBlink.setAttribute("id", "AbjureButtonBlink");
  AbjureButton = document.createElement("img");
  AbjureButton.setAttribute("id", "AbjureButton");
  AbjureButton.setAttribute("src", "https://homestuckITA.github.io/new animations/90/Abjure.png");

  //STRIFE BANNER

  StrifeBanner = document.createElement("img");
  StrifeBanner.setAttribute("id", "StrifeBanner");
  StrifeBanner.setAttribute("style", "position:absolute; top:25px; left:56px;");
  StrifeBanner.setAttribute("src", "https://homestuckITA.github.io/new animations/90/Strife.png");

  //AUTOPASTRY

  var AutoPastry = [];
  AutoPastry[0] = document.createElement("img");
  AutoPastry[0].setAttribute("id", "AutoPastry");
  AutoPastry[0].setAttribute("src", "https://homestuckITA.github.io/new animations/90/Auto-Pastry.gif");
  AutoPastry[1] = document.createElement("img");
  AutoPastry[1].setAttribute("id", "Exclaim");
  AutoPastry[1].setAttribute("src", "https://homestuckITA.github.io/new animations/90/Exclaim.gif");

  //GUARDIAN RUBRIC: CODDLEBRAND

  var Coddlebrand = document.createElement("img");
  Coddlebrand.setAttribute("id", "Coddlebrand");
  Coddlebrand.setAttribute("src", "https://homestuckITA.github.io/new animations/90/Coddlebrand.gif");

  //DOTESMITE!

  var Dotesmite = document.createElement("img");
  Dotesmite.setAttribute("id", "Dotesmite");
  Dotesmite.setAttribute("src", "https://homestuckITA.github.io/new animations/90/Dotesmite.gif");

  InteractDiv.appendChild(LoadingButton);

  /* LOADING SUBVIDEOS */

  var IntroReq = new XMLHttpRequest();
  var LoopReq = new XMLHttpRequest();
  var AggressReq = new XMLHttpRequest();
  var AbjureReq = new XMLHttpRequest();

  var IntroVideo;
  var LoopVideo;
  var AggressVideo;
  var AbjureVideo;

  IntroReq.open('GET', 'https://homestuckITA.github.io/new animations/90/Intro.mp4', true);
  IntroReq.responseType = "blob";
  LoopReq.open('GET', 'https://homestuckITA.github.io/new animations/90/Loop.mp4', true);
  LoopReq.responseType = "blob";
  AggressReq.open('GET', 'https://homestuckITA.github.io/new animations/90/Aggress.mp4', true);
  AggressReq.responseType = "blob";
  AbjureReq.open('GET', 'https://homestuckITA.github.io/new animations/90/Abjure.mp4', true);
  AbjureReq.responseType = "blob";

  IntroReq.onload = function () {
    console.log(`Intro loaded! ${this.status}`);
    if(this.status === 206 || this.status === 200) {
      console.log("Status good!");
      var Blob = this.response;
      IntroVideo = URL.createObjectURL(Blob);
      LoadingState++;
    }
  }

  LoopReq.onload = function () {
    console.log(`Loop loaded! ${this.status}`);
    if(this.status === 206 || this.status === 200) {
      var Blob = this.response;
      LoopVideo = URL.createObjectURL(Blob);
      LoadingState++;
    }
  }

  AggressReq.onload = function () {
    console.log(`Aggress loaded! ${this.status}`);
    if(this.status === 206 || this.status === 200) {
      var Blob = this.response;
      AggressVideo = URL.createObjectURL(Blob);
      LoadingState++;
    }
  }

  AbjureReq.onload = function () {
    console.log(`Abjure loaded! ${this.status}`);
    if(this.status === 206 || this.status === 200) {
      var Blob = this.response;
      AbjureVideo = URL.createObjectURL(Blob);
      LoadingState++;
    }
  }

  IntroReq.send();
  LoopReq.send();
  AggressReq.send();
  AbjureReq.send();

  var CheckLoadInterval = window.setInterval(CheckLoadStatus, 250);

  function CheckLoadStatus() {
    if(LoadingState >= 4) {
      window.clearInterval(CheckLoadInterval);
      Videos[0].src = IntroVideo;
      Videos[1].src = LoopVideo;
      Videos[2].src = AggressVideo;
      Videos[3].src = AbjureVideo;
      LoadingButton.setAttribute("src", "https://homestuckITA.github.io/new animations/general/start.png");
      LoadingButton.setAttribute("style", "position:absolute; top:365px; left:220.5px;cursor:pointer;");
      LoadingButton.setAttribute("class", "startvideo");
      LoadingButton.addEventListener("click", function(){
        InteractDiv.removeChild(LoadingButton);
        InteractDiv.removeChild(LoadingScreen);
        InteractDiv.appendChild(Volume);
        Videos[0].play();

      });
    }
  }

  /*
  PlayAgain.addEventListener("click", function( event ) {
    Video.play();
    Audio.currentTime = 0;
    //Audio.play();
    InteractDiv.removeChild(PlayAgain);
  });*/

  AggressButton.addEventListener("click", function( event ) {
    //Source.setAttribute("src", `https://homestuckITA.github.io/new animations/90/Aggress.mp4`);
    //Video.src = AggressVideo;
    //Video.removeAttribute("loop");
    //Video.load();
    Videos[1].pause();
    Videos[1].currentTime = 0;
    Videos[1].style.display = "none";
    Videos[2].style.display = "initial";
    Videos[2].play();
    CurrentState = "Aggress";
    InteractDiv.removeChild(AggressButtonBlink);
    InteractDiv.removeChild(AggressButton);
    InteractDiv.removeChild(AbjureButtonBlink);
    InteractDiv.removeChild(AbjureButton);
  });

  AbjureButton.addEventListener("click", function( event ) {
    //Source.setAttribute("src", `https://homestuckITA.github.io/new animations/90/Abjure.mp4`);
    Videos[1].pause();
    Videos[1].currentTime = 0;
    Videos[1].style.display = "none";
    Videos[2].style.display = "none";
    Videos[3].play();
    CurrentState = "Abjure";
    InteractDiv.removeChild(AggressButtonBlink);
    InteractDiv.removeChild(AggressButton);
    InteractDiv.removeChild(AbjureButtonBlink);
    InteractDiv.removeChild(AbjureButton);
  });



  function VideoEnd() {
    if(CurrentState == "Intro") {
      Audio.play();
      Videos[0].style.display = "none";
    }
    if(CurrentState != "Loop") {
      Videos[2].pause();
      Videos[2].currentTime = 0;
      Videos[3].pause();
      Videos[3].currentTime = 0;
      Videos[1].style.display = "initial";
      Videos[1].play();
      CurrentState = "Loop";
      InteractDiv.appendChild(AggressButtonBlink);
      InteractDiv.appendChild(AggressButton);
      InteractDiv.appendChild(AbjureButtonBlink);
      InteractDiv.appendChild(AbjureButton);

      HitsoundPlayed = false;
    }
  }

  var StrifeShown = false;
  var StrifeHidden = false;
  var HitsoundPlayed = false;
  var AutoPastryShown = false;
  var CoddlebrandShown = false;
  var DotesmiteShown = false;

  function IntroCheckProgress() {
    //STRIFE!
    if(Videos[0].currentTime >= 1.8 && !StrifeShown) {
      InteractDiv.appendChild(StrifeBanner);
      StrifeShown = true;
      console.log("Strife shown!");
    }
    if(Videos[0].currentTime >= 2.3 && !StrifeHidden) {
      InteractDiv.removeChild(StrifeBanner);
      StrifeHidden = true;
      console.log("Strife hidden!");
    }
  }

  function AggressCheckProgress() {
    //Auto-Pastry
    if(Videos[2].currentTime >= 3.1 && Videos[2].currentTime < 4 && !AutoPastryShown) {
      InteractDiv.appendChild(AutoPastry[0]);
      InteractDiv.appendChild(AutoPastry[1]);
      AutoPastryShown = true;
    }
    if(Videos[2].currentTime >= 4.2 && AutoPastryShown) {
      InteractDiv.removeChild(AutoPastry[0]);
      InteractDiv.removeChild(AutoPastry[1]);
      AutoPastryShown = false;
    }
    //Hitsound
    if(Videos[2].currentTime >= 3 && !HitsoundPlayed) {
      Hitsound.play();
      HitsoundPlayed = true;
      console.log("Hitsound should play!");
    }
  }

  function AbjureCheckProgress() {
    //Guardian Rubric: Coddlebrand
    if(Videos[3].currentTime > 0 && Videos[3].currentTime < 0.5 && !CoddlebrandShown) {

      InteractDiv.appendChild(Coddlebrand);
      CoddlebrandShown = true;
    }
    if(Videos[3].currentTime >= 0.9 && CoddlebrandShown) {
      InteractDiv.removeChild(Coddlebrand);
      CoddlebrandShown = false;
      Coddlebrand.setAttribute("src", `https://homestuckITA.github.io/new animations/90/Coddlebrand.gif?reset=${Math.random()}`);
    }

    //Dotesmite!
    if(Videos[3].currentTime > 1.2 && Videos[3].currentTime < 1.5 && !DotesmiteShown) {

      InteractDiv.appendChild(Dotesmite);
      DotesmiteShown = true;
    }
    if(Videos[3].currentTime >= 1.8 && DotesmiteShown) {
      InteractDiv.removeChild(Dotesmite);
      DotesmiteShown = false;
    }
  }

  Videos[0].addEventListener("ended", VideoEnd);
  Videos[0].addEventListener("timeupdate", IntroCheckProgress);
  Videos[1].addEventListener("ended", VideoEnd);
  Videos[2].addEventListener("ended", VideoEnd);
  Videos[2].addEventListener("timeupdate", AggressCheckProgress);
  Videos[3].addEventListener("ended", VideoEnd);
  Videos[3].addEventListener("timeupdate", AbjureCheckProgress);

  Volume.addEventListener("click", function( event ) {
    VolumeState++;
    if(VolumeState > 3) {
      VolumeState = 0;
    }
    switch(VolumeState) {
      case 0: //Full
        Volume.setAttribute("src", "https://homestuckITA.github.io/new animations/general/volumefull.png");
        Audio.volume = 1;
        Hitsound.volume = 1;
        break;
      case 1: //67%
        Volume.setAttribute("src", "https://homestuckITA.github.io/new animations/general/volumemute.png");
        Audio.volume = 0;
        Hitsound.volume = 0;
        break;
      case 2: //33%
        Volume.setAttribute("src", "https://homestuckITA.github.io/new animations/general/volume33.png");
        Audio.volume = 0.33;
        Hitsound.volume = 0.33;
        break;
      case 3: //Muted
        Volume.setAttribute("src", "https://homestuckITA.github.io/new animations/general/volume67.png");
        Audio.volume = 0.67;
        Hitsound.volume = 0.67;
        break;
    }
  });
}
