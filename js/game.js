class Game {
    constructor(canvas){
    this.$canvas=canvas
    this.ctx = document.querySelector("canvas")
    this.field=new Field(this)
    this.playerArray=[];
    this.ball = new Ball(this);
    }
}