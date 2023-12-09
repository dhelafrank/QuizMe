
export function load(message, state) {
    if(!state){
        try {
            home.style.display = "block"
            loadImage.style.display = "none"
        } catch (error) {
            throw
        }
    }
	home.style.display = "none"
	loadImage.style.display = "block"
	loadingStatus.style.display = "block"

	let scoreFinal = (`${score} / ${totalScore}`)
	localStorage.setItem("myScore", scoreFinal);
	localStorage.setItem("justScore", score);
}