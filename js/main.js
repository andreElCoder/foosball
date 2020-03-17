
let $canvas= document.querySelector("canvas");
let game = new Game($canvas);
game.field.displayField();
game.createTeams();
game.displayTeams();
game.ball.displayBall();

