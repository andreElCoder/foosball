
let $canvas= document.querySelector("canvas");
let game = new Game($canvas);
game.createTeams();
game.ball.throughBall();
game.updateGame();
//game.displayTeams();
//game.ball.displayBall();

