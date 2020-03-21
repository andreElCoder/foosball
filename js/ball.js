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
    this.x=game.width/2
    this.y=game.height-60
    this.speedX= 5
    this.speedY= -20     
}
updateBall(){
    this.x+=this.speedX;
    this.y+=this.speedY;
}
checkBallOnBoundaries(){
    if(this.x<60 && this.y>235 && this.y<this.game.height-235){
        this.throughBall();
        this.game.score.goalTeam1()
        this.game.score.updateScore()                                                      //Goal area 1
    }
    else if(this.x > this.game.width-60 && this.y>235 && this.y<this.game.height-235){
        this.throughBall();
        this.game.score.goalTeam2()                                                        //Goal area 2
        this.game.score.updateScore()
    }
    else if(this.x<60 || this.x > this.game.width-60) this.speedX=-this.speedX
    else if(this.y<60 || this.y > this.game.height-60) this.speedY=-this.speedY
    
}

}