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
    this.x= this.game.width/2 
    this.y= this.game.height-70
    this.speedX= Math.random()*0.5-0.5
    this.speedY= 2+Math.random()*3
    while(Math.abs(this.speedX)<0.3){
        this.speedX= Math.random()*1-1
    }
    

}
updateBall(){
    this.x+=this.speedX;
    this.y+=this.speedY;
}
friction(){
    console.log(this.speedY)
    if(this.speedY>0)
    this.speedY-=0.00001
    else{this.speedY+=0.00001}
    if(this.speedX>0)
    this.speedX-=0.00001
    else{this.speedX+=0.00001}
}
}