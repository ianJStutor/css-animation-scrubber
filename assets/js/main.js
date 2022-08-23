//DOM elements
const div = document.querySelector("div");
const playButton = document.querySelector("button#playpause");
const input = document.querySelector("input");

//state variables
var interval;

//onload setup
init: {
	input.addEventListener("input", scrub);
    playButton.addEventListener("click", play);
	document.querySelector("button#rewind").addEventListener("click", rewind);
	document.querySelector("fieldset button").addEventListener("click", changeSettings);
    changeSettings();
}

//controllers
function scrub(){
	clearAnimation();
	setAnimationDelay();
	stopAnimation();
	playButton.innerHTML = "&#9658;";
}

function play(){
	if (div.classList.contains("playing")){
		playButton.innerHTML = "&#9658;";
		div.classList.remove("playing");
		stopAnimation();
	}
	else {
		clearAnimation();
		setAnimationDelay();
		startAnimation();
		playButton.innerHTML = "<span>&#10074;&#10074;</span>";
		div.classList.add("playing");
	}
}

function setAnimationDelay(){
	div.style.animationDelay = -input.value + "s";
}

function clearAnimation(){
	div.classList.remove("playing");
	div.style.animation = "none";
	div.offsetHeight;
	div.style.animation = null;
}

function startAnimation(){
	interval = setInterval(tick, 100);
}

function tick(){
	input.value = Number(input.value) + 0.1;
}

function stopAnimation(){
	clearInterval(interval);
}

function rewind(){
	input.value = 0;
	scrub();
}

function changeSettings(){
	let static = document.querySelector("#static").value,
		from = document.querySelector("#from").value,
		to = document.querySelector("#to").value,
		styleElement = document.querySelector("#testdiv1style");
	styleElement.innerHTML = `
		#testdiv1 {${static} animation: testdiv1anim 5s forwards; animation-play-state: paused; }
		#testdiv1.playing { animation-play-state: running; }
		@keyframes testdiv1anim {
			  0% {${from}}
			100% {${to}}
		}
	`;
}
