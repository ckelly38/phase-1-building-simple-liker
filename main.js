// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errmsgelmnt = document.getElementById("modal");
errmsgelmnt.className = "hidden";
let myheartsarr = document.getElementsByClassName("like-glyph");
for (let n = 0; n < myheartsarr.length; n++)
{
  myheartsarr[n].addEventListener('click', function(event){
    mimicServerCall()
    .then(function()
    {
      console.log("success");
      //console.log(event);
      event.target.textContent = FULL_HEART;
      event.target.className = "activated-heart";
    })
    .catch(function(error){
      console.log(error.message);
      document.getElementById("modal-message").textContent = "" + error.message;
      errmsgelmnt.className = "";
      setTimeout(function(){
        errmsgelmnt.className = "hidden";
      }, 3000);
    });
  });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
