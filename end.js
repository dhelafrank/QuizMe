let scoreDisplay = document.getElementById("score")
let user = document.getElementById("username")
//let saveButton = document.getElementById("save")
//let replayButton = document.getElementById("replay")
//let homeButton = document.getElementById("home")
let loadImage = document.getElementById("loading")
let lQuestions = document.getElementById("lQuestions")
let lSave = document.getElementById("lSave")
let homeElements = document.getElementById("homecont")
if (sessionStorage.getItem("auth").length < 3) {
	window.location.href = "/"
}


scoreDisplay.innerHTML = (localStorage.getItem("myScore"))
user.innerHTML = (localStorage.getItem("username"))





saveScore = () => {
console.log("Save Clicked")
setTimeout(x = () => {
      homeElements.style.display = "none";
   loadImage.style.display = "block"
   lSave.style.display = "block"
        }, 200)
        setTimeout(x = () => {
         saveUserScore()
        lSave.innerText = "Saved!"
        }, 1000)
        setTimeout(x = () => {
      window.location.href = "./index.html"
   
        }, 2000)
}




toHome = () => {
  console.log("Home Clicked")
  setTimeout(x = () => {
      homeElements.style.display = "none";
   loadImage.style.display = "block"
   
        }, 200)
        setTimeout(x = () => {
      window.location.href = "./index.html"
        }, 1000)
      
}



playAgain = () => {
   console.log("Play Again Clicked")
   setTimeout(x = () => {
      homeElements.style.display = "none";
   loadImage.style.display = "block"
   lQuestions.style.display = "block"
        }, 200)
        setTimeout(x = () => {
      window.location.href = "./game.html"
        }, 5000)
}















/*
const highScores = JSON.parse(fs.readFileSync('./highscores.json')) || [];
console.log("step1")
saveUserScore = () => { 
console.log("step2")
const scoredata = { 
score: Number(localStorage.getItem("justScore")), 
name: localStorage.getItem("username") 
}
 //var scoreB = JSON.stringify(scoredata) 
highScores.push(scoredata); 
highScores.sort((a, b) => { return b.score - a.score}); highScores.splice(5); console.log("step3") 
//localStorage.setItem('highScores',highScores); 
fs.writeFileSync('highscores.json', JSON.stringify(highScores)); 
//console.log(JSON.parse(localStorage.getItem("highScores")))
 } 


*/







const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log("step1")

saveUserScore = () => {
   console.log("step2")
   const scoredata = {
      score: Number(localStorage.getItem("justScore")),
      name:  localStorage.getItem("username")
      
   }
   //var scoreB = JSON.stringify(scoredata)   
   highScores.push(scoredata);
    highScores.sort((a, b) => {
    return b.score - a.score});
    highScores.splice(5);
   console.log("step3")
      //localStorage.setItem('highScores',highScores);
    localStorage.setItem('highScores', JSON.stringify(highScores));
   //console.log(JSON.parse(localStorage.getItem("highScores")))
   
}
