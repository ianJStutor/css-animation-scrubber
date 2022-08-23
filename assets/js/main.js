//DOM elements
const main = document.querySelector("main");
const slider = document.querySelector("nav input");
const [html, static, animation] = document.querySelectorAll("footer textarea");
const [staticStyle, animationStyle] = document.head.querySelectorAll("style");

//state variables
var id = "myDiv";

//page load setup
html.value = main.innerHTML.trim();
changeStatic();
changeAnimation();

//state event listeners
html.addEventListener("change", changeHTML);
static.addEventListener("change", changeStatic);
animation.addEventListener("change", changeAnimation);

//state change
function changeHTML() {
    main.innerHTML = html.value.trim();
}

function changeStatic() {
    staticStyle.innerHTML = `${ static.value.trim() } #${id}{animation-play-state:paused}#${id}.playing{animation-play-state:running;}`;
}

function changeAnimation() {
    animationStyle.innerHTML = animation.value.trim();
}
