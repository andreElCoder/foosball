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
}