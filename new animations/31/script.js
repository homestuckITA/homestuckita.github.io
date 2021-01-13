
//Page 31 - John & his CDs

window.onload = function() {

  // Put the location of the images here!
  var Prefix = "/Images/Homestuck/31/";

  /* LINKS */
  var BQLink = "https://homestuck.com/bard-quest";
  var PSLink = "https://homestuck.com/problem-sleuth";
  var JBLink = "https://homestuck.com/jailbreak";

  var InteractDiv = document.getElementsByClassName("interact")[0];

  var Image = document.createElement("img");
  Image.setAttribute("style", "position:absolute; top:102px; left:326px;");

  var ImageAppended = false;

  /* Event listeners for the clickable stuff! */

  InteractDiv.addEventListener("click", function( event ) {   
    
    if(event.offsetX >= 103     &&
       event.offsetX <= 103+5   &&
       event.offsetY >= 166     &&
       event.offsetY <= 166+165) {

      //BARD QUEST
      window.open(BQLink);

    } else if(event.offsetX >= 138     &&
       event.offsetX <= 138+5   &&
       event.offsetY >= 166     &&
       event.offsetY <= 166+160) {

      //PROBLEM SLEUTH
      window.open(PSLink);

    } else if(event.offsetX >= 173     &&
       event.offsetX <= 173+5   &&
       event.offsetY >= 156     &&
       event.offsetY <= 156+165) {
      
      //JAILBREAK
      window.open(JBLink);

    }

  }, false);

  InteractDiv.addEventListener("mousemove", function( event ) {   
    
    if(event.offsetX >= 103     &&
       event.offsetX <= 103+5   &&
       event.offsetY >= 166     &&
       event.offsetY <= 166+165) {

      //BARD QUEST
      ImageAppended = true;
      Image.setAttribute("src", Prefix+"bq.png");
      InteractDiv.appendChild(Image);
      document.body.style.cursor = 'pointer';

    } else if(event.offsetX >= 113     &&
       event.offsetX <= 113+5   &&
       event.offsetY >= 166     &&
       event.offsetY <= 166+165) {

      //THE CAPER HAVERS
      ImageAppended = true;
      Image.setAttribute("src", Prefix+"tch.png");
      InteractDiv.appendChild(Image);

    } else if(event.offsetX >= 138     &&
       event.offsetX <= 138+5   &&
       event.offsetY >= 166     &&
       event.offsetY <= 166+160) {

      //PROBLEM SLEUTH
      ImageAppended = true;
      Image.setAttribute("src", Prefix+"ps.png");
      InteractDiv.appendChild(Image);
      document.body.style.cursor = 'pointer';

    } else if(event.offsetX >= 148     &&
       event.offsetX <= 148+5   &&
       event.offsetY >= 161     &&
       event.offsetY <= 161+165) {

      //AND IT DON'T STOP
      ImageAppended = true;
      Image.setAttribute("src", Prefix+"aids.png");
      InteractDiv.appendChild(Image);

    } else if(event.offsetX >= 173     &&
       event.offsetX <= 173+5   &&
       event.offsetY >= 156     &&
       event.offsetY <= 156+165) {
      
      //JAILBREAK
      ImageAppended = true;
      Image.setAttribute("src", Prefix+"jb.png");
      InteractDiv.appendChild(Image);
      document.body.style.cursor = 'pointer';

    } else if(event.offsetX >= 198     &&
       event.offsetX <= 198+5   &&
       event.offsetY >= 156     &&
       event.offsetY <= 156+165) {

      //GHOSTBUSTERS II MMORPG
      ImageAppended = true;
      Image.setAttribute("src", Prefix+"gbm.png");
      InteractDiv.appendChild(Image);

    } else if(event.offsetX >= 208     &&
       event.offsetX <= 208+5   &&
       event.offsetY >= 166     &&
       event.offsetY <= 166+150) {
      
      //LITTLE MONSTERS
      ImageAppended = true;
      Image.setAttribute("src", Prefix+"lm.png");
      InteractDiv.appendChild(Image);

    } else if(event.offsetX >= 228     &&
       event.offsetX <= 228+5   &&
       event.offsetY >= 151     &&
       event.offsetY <= 151+165) {
      
      //HARRY ANDERSON CALL MY BLUFF
      ImageAppended = true;
      Image.setAttribute("src", Prefix+"hacmb.png");
      InteractDiv.appendChild(Image);
    } else {
      if(ImageAppended) {
        InteractDiv.removeChild(Image);
        ImageAppended = false;
        document.body.style.cursor = 'default';
      }
    }

  }, false);
}
