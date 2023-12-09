highScoresList = document.getElementById("highscoreslist")
highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(JSON.stringify(localStorage.getItem('highScores')))


if (sessionStorage.getItem("auth") == null || length < 3) {
	window.location.href = "/"
}

highScoresList.innerHTML = (highScores.map(scores => {
   return(`<li class=userndscore>${scores.name} - ${scores.score}<li>`)
})).join("");