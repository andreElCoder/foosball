class Player{
    constructor(game,x,y){
        this.game = game
        this.ctx = game.ctx
        this.x = x
        this.y = y
        this.speedY = 0
    }

displayPlayer(){
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.moveTo(this.x,this.y-12)
    this.ctx.lineTo(this.x,this.y+12)
    this.ctx.strokeStyle = "rgb(226, 206, 150)"
    this.ctx.lineWidth = 6
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.beginPath()
    this.ctx.strokeStyle = "black"
    this.ctx.lineWidth = 8  
    this.ctx.arc(this.x,this.y, 4, 0, 2 * Math.PI)
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.restore()
}
moveUp() {
    this.speedY = -4
}
moveDown() {
    this.speedY = 4
}
notMoving() {
    this.speedY = 0
}
updatePlayer(){
    this.y+=this.speedY;
}
checkTouchBall(ball){ 
//Ball radius is 5 ( also added as tolerance/interval or this condition eg: ball.x===this-x almost never happen)
//  <ball.x<
    if(ball.x+5 < this.x-5 && ball.x+15>this.x-5 && ball.y >this.y-10 && ball.y<this.y+10){// Ball touch left side of player
        console.log("Ball touch left side of player")
        ball.speedX=-ball.speedX
    }  
    if(ball.x-10 < this.x+5 && ball.x>this.x+5  &&  ball.y >this.y-10 && ball.y<this.y+10){ // Ball touch rigth side of player
        console.log("Ball touch right side of player")
        ball.speedX=-ball.speedX
    }
    if(ball.y+5 < this.y-5 && ball.y+15 > this.y-5 && ball.x >this.x-10 && ball.x<this.x+10){ // Ball touch upper side of player
        console.log("Ball touch upper side of player")
        ball.speedY=-ball.speedY
    }
    if(ball.y-10 < this.y+5 && ball.y>this.y+5  &&  ball.x >this.x-10 && ball.x<this.x+10){ // Ball touch bottom side of player
        console.log("Ball touch bottom side of player")
        ball.speedY=-ball.speedY
    }
}

}