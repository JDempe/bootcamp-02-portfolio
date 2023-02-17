// Credit: https://stackoverflow.com/questions/6398526/javascript-jquery-or-something-to-change-text-every-some-seconds
var text = ["Mechanical Engineer", "Software Test Engineer", "Aspiring Full Stack Developer"];
var counter = 0;
var elem = document.getElementById("changeText");
elem.innerHTML = text[0];
var opacity = Number(window.getComputedStyle(elem).getPropertyValue("opacity"));
var inst = setInterval(change, 4000);

function change() {
   counter++;
   if (counter >= text.length) {
      counter = 0;
   };
   elem.innerHTML = text[counter];
}