class Game {
    constructor(canvas){
    this.$canvas=canvas
    this.ctx = this.$canvas.getContext("2d");
    this.width = this.$canvas.width;
    this.height= this.$canvas.height;
    this.field=new Field(this)
    this.playerArray=[];
    //this.ball = new Ball(this);
    }
}