let gmailClickState = false;
function gmailcall(){
  gmailClickState = !gmailClickState;
  if(gmailClickState === true){
    document.querySelector(".show-mail").style.display = "grid";
  } else {
    document.querySelector(".show-mail").style.display = "none";
  }
}

let resumeClickState = false;
function showResume(){
    resumeClickState = !resumeClickState;
    if(resumeClickState === true){
      document.querySelector(".show-resume").style.display = "grid";
      // document.querySelector(".part1").style.filter = "blur(10px)";
      // document.querySelector(".part1").addEventListener("click",function(){
      //   showResume();
      // })
    } else {
    document.querySelector(".show-resume").style.display = "none";
    // document.querySelector(".part1").style.filter = "blur(0px)";
    }
}

//Scroll back to top button
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}