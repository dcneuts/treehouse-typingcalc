const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

// Change variable to array to capture precise time in HH:MM:SS:MS
var timer = [0,0,0,0];

// Add leading zero to numbers 9 or below (purely for aesthetics):
// Using helper function for string to parse number in order to place 0
function leadingZero(time) {
	if (time <= 9) {
		time = "0" + time;
	}
	// Returning time to be used elsewhere in the script
	return time;
}


// Run a standard minute/second/hundredths timer:
function runTimer() {
	// Helper function above
	let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
	theTimer.innerHTML = currentTime;
	// Pushing changes to MS (array position 3, as array starts from 0)
	timer[3]++;

	timer[0] = Math.floor((timer[3]/100)/60);
	timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
	timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
	let textEntered = testArea.value;
	console.log(textEntered);
}

// Start the timer:
function start() {
	let textEnteredLength = testArea.value.length;
	if (textEnteredLength === 0) {
		setInterval(runTimer, 10);
	}
	console.log(textEnteredLength);
}


// Reset everything:
function reset () {
	console.log("The reset button was pressed.");
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);