let score = 0;
let display = document.getElementById('score');

let holes = Array.from(document.getElementsByClassName("hole"));

setInterval(function() {
    var randomHoleIndex = Math.floor((Math.random() * holes.length));
    holes[randomHoleIndex].classList.toggle("mole");
}, 900);

const game = document.getElementById("whack-a-mole");

game.addEventListener('click', function (evt) {
   if(evt.target.matches(".mole")) {
       score++;
       display.innerText = score;
       var click = holes.indexOf(evt.target);
       holes[click].classList.toggle("mole",false);
   }
});