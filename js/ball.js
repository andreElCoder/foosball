class Ball{
    constructor(game){
        this.game = game
        this.ctx = game.ctx
        this.x=500
        this.y=500
        this.speedX = 0
        this.speedY = 0
    }
displayBall(){
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = "rgb(50, 206, 150)"
    this.ctx.arc(this.x,this.y,5,0,2 * Math.PI)
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.restore()
}
throughBall(){
    this.x= 90+game.width/2 
    this.y= +game.height/2  //game.height-60
    this.speedX= 0
    this.speedY= 5     
}
updateBall(){
    this.x+=this.speedX;
    this.y+=this.speedY;
}

}