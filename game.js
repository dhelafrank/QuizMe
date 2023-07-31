const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
let questionCounterText = document.getElementById("questionCounter");
let scoreText = document.getElementById("score");
let remaining = document.getElementById("inset");
let loadImage = document.getElementById("loading")
let home = document.getElementById("home")
let loadingStatus = document.getElementById("detail")
if (sessionStorage.getItem("auth").length < 3) {
	window.location.href = "/"
}

let currentQuestion = {}
let acceptingAnswers = false;
//let score = Number(scoreText.innerHTML);
let questionCounter = 0;

let initial = 0

let MAX_QUESTIONS;

let questionSource = ""

function fetchSource() {
	let source = localStorage.getItem("questionSource")
	if (source == "random") {
		questionSource = "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
	} else {
		questionSource = `https://quizme-backend.onrender.com/${source.toLowerCase()}`
	}
	go(questionSource)
	document.getElementById("quizme").innerHTML = `QuizMe | ${source.toUpperCase()}`
}
fetchSource()


questions = [];

function go(questionSource) {
	fetch(questionSource)
		.then(res => {
			return res.json()
		})
		.then((loadedQuestions) => {
			questions = loadedQuestions.results.map((loadedQuestion) => {
				const formattedQuestion = {
					question: loadedQuestion.question,
				};

				const answerChoices = [...loadedQuestion.incorrect_answers];
				formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
				answerChoices.splice(
					formattedQuestion.answer - 1,
					0,
					loadedQuestion.correct_answer
				);

				answerChoices.forEach((choice, index) => {
					formattedQuestion['choice' + (index + 1)] = choice;
				});

				return formattedQuestion;
			});


			console.log(MAX_QUESTIONS)
			//loadedQuestions.forEach(each=>questions.push(each))
			//console.log(questions)
			startGame()


		}).catch(err => {
			// alert("can't load questions at the moment, check your internet connection")
			// setTimeout(d => {
			// 	window.location.href = "./"
			// }, 1000)
			console.error(err);
		})
}






/* CONSTANTS */

MAX_QUESTIONS = 10
const CORRECT_BONUS = 3;
setTimeout(k = () => {
	totalScore = (CORRECT_BONUS * MAX_QUESTIONS)
	console.log(totalScore)
}, 800)

let score = 0



function startGame() {
	questionCounter = 0;
	dividend = 0
	availableQuestions = [...questions];
	getNewQuestion()

}


function getNewQuestion() {
	let dividend = 10;
	if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
		//go to the end page
		load()
		setTimeout(() => {
			window.location.href = "/end.html";
		}, 4000)

	} else {
		//console.log('nit finished')
	}

	//console.log(availableQuestions)
	questionCounter++;
	questionCounterText.innerHTML = questionCounter + "/" + MAX_QUESTIONS;
	questionCounterText.style.color = "#56a5eb"
	const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
	let increase = (initial += dividend)
	remaining.style.width = `${increase}%`
	currentQuestion = availableQuestions[questionsIndex];
	question.innerHTML = currentQuestion.question;
	choices.forEach((choice) => {
		const number = choice.dataset['number'];
		choice.innerText = currentQuestion['choice' + number];
	});
	availableQuestions.splice(questionsIndex, 1)
	acceptingAnswers = true;
};

choices.forEach((choice) => {
	choice.addEventListener('click', (e) => {
		if (!acceptingAnswers) return;
		acceptingAnswers = false;
		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset['number'];





		let classToApply = 'incorrect';
		if (selectedAnswer == currentQuestion.answer) {
			classToApply = 'correct'
			/* let currentScore =  score += CORRECT_BONUS
			 
			  scoreText.innerHTML = currentScore;*/
			incrementScore(CORRECT_BONUS);


		}

		selectedChoice.parentElement.classList.add(classToApply);
		setTimeout(() => {
			selectedChoice.parentElement.classList.remove(classToApply);
			getNewQuestion();
		}, 500)

		console.log(classToApply)

	});
});



/* Progress Bar
progress = () => {
   prog = (MAX_QUESTIONS/100)
}
*/



console.log("The game has begun");



/*
if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }*/
""
incrementScore = num => {
	score += num;
	scoreText.innerText = score;
};


function load() {
	home.style.display = "none"
	loadImage.style.display = "block"
	loadingStatus.style.display = "block"
	let scoreFinal = (`${score} / ${totalScore}`)
	localStorage.setItem("myScore", scoreFinal);
	localStorage.setItem("justScore", score);
}