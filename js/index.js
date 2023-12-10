
let playButton = document.getElementById("playbtn")
let highScoreButton = document.getElementById("hsbtn")
let userText = document.getElementById("usertext")
let coursetext = document.getElementById("coursetext")
let errorDiv = document.getElementById("error")
let errorText = document.getElementById("errormsg")
let loadImage = document.getElementById("loading")
let loadMsg = document.getElementById("detail")
let home = document.getElementById("home")


playButton.style = "color:#aaaaaa"
playButton.style = "border-color: #fff"
playButton.style = "background-color: #00000033"
loadMsg.style = "display:none"
/* Event Listener */

playButton.addEventListener("click", () => {
   // console.log(coursetext.value);

   setTimeout(() => {
      nameCheck()
   }, 500)
})

highScoreButton.addEventListener("click", () => {
   // setTimeout(() => {
   //    load()
   // }, 1000)

   // setTimeout(() => {
      window.location.href = "./highscore.html";
   // }, 4000)
})


userText.addEventListener("keyup", () => {
   if (userText.value.length > 3) {
      playButton.style.color = "#56a5eb"
      playButton.style = "border-color: #56a5eb"
      playButton.style = "background-color: white"
   } else {
      playButton.style.color = "#aaaaaa"
      playButton.style = "border-color: #aaa"
      playButton.style = "background-color: #00000033"
   }
})



function nameCheck(){
   if (userText.value.length < 1) {
      errorMessage()
      return errorText.innerHTML = "Input your name first"
      /* setTimeout(() => {
             errorReturn()
        }, 100)*/
   }
   /*else if (userText.value.length < 4){
   errorMessage()
      return errorText.innerHTML = "Name must not be less than 4 characters"
    setTimeout(() => {
         errorReturn()
       }, 10)
   }*/
   else {
      localStorage.setItem('username', userText.value)
      sessionStorage.setItem('auth', userText.value)
      localStorage.setItem('questionSource', coursetext.value)
      console.log(coursetext.value);

      // load()

      // loadMsg.style = "display:block"
      // setTimeout(() => {
      window.location.href = "./game.html";
      // }, 7000)
   }
}


/* throw error */

function errorMessage(){
   errorDiv.style.transition = "1s";
   errorDiv.style.height = "5rem";
   errorText.style = "border:0.4rem solid #ff1f00a3;"

}

/*errorT = () => {
   console.log("done")
    errorDiv.style.transition = "0.5s";
    errorDiv.style.height = "0px";
    errorText.style = "border:0"
    errorText.innerHTML = " "
    
     }
 */

/* SVG Animation */
function load(){
   home.style.display = "none"
   loadImage.style.display = "block"
   errorText.style.display = "none"
   loadMsg.style.display = "block"
}