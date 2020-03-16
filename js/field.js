class Field{
    constructor(game){
    this.game=game
    this.ctx= game.ctx
}

displayField(){

    this.ctx.save();
    this.ctx.fillStyle="green";
    this.ctx.fillRect(0,0,this.game.width,this.game.height)
    this.ctx.restore();
}
}
