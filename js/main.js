
let $canvas= document.querySelector("canvas");
let $score = document.querySelector("#score")
console.log($score)
let game = new Game($canvas,$score);
game.createTeams();
game.ball.throughBall();
game.keysPressed();
game.updateGame();
//game.displayTeams();
//game.ball.displayBall();

