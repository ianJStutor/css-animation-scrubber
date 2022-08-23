//DOM elements
const main = document.querySelector("main");
const slider = document.querySelector("nav input");
const [html, static, animation] = document.querySelectorAll("footer textarea");

//preassign html textarea
html.value = main.innerHTML.trim();
