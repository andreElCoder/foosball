
let $canvas= document.querySelector("canvas");
let game = new Game($canvas);
game.field.displayField();
new Player(game);
player.displayPlayer();