highScoresList = document.getElementById("highscoreslist")
highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(JSON.stringify(localStorage.getItem('highScores')))


if (sessionStorage.getItem("auth") == null || length < 3) {
	window.location.href = "/"
}

highScoresList.innerHTML = (highScores.map(scores => {
   return(`<li class=userndscore>${scores.name} - ${scores.score}<li>`)
})).join("");































/*//Get Scores from Local storage
function scoreHere() {
	let scoreHere;
	if (localStorage.getItem('highScores') === null) {
		scoreHere = [];
	} else {
		scoreHere = seenScore;
	};
	
	scoreHere.forEach(function(){
		var eachScore = document.createElement("li")
		eachScore.className = "userndscore";
		eachScore.appendChild(document.createTextNode(`${scores.name} - ${scores.score}`));
		highScoresList.appendChild(eachScore);
		})}
*/