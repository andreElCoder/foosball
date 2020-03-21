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
keysPressed(){
    window.addEventListener("keydown", event => {
        if(event.keyCode ===81 ||event.keyCode === 65||event.keyCode === 79||event.keyCode === 76||event.keyCode === 87||event.keyCode === 83||event.keyCode === 73||event.keyCode === 75||event.keyCode === 69||event.keyCode === 68||event.keyCode === 85||event.keyCode ===  74||event.keyCode === 82||event.keyCode === 70||event.keyCode === 89||event.keyCode === 72 )
        this.pressedKeys[event.keyCode] = event.type == 'keydown'
        // You could also use an array
    /* insert conditional here */
    })
    window.addEventListener('keyup', event => {
        if(event.keyCode ===81 ||event.keyCode === 65||event.keyCode === 79||event.keyCode === 76||event.keyCode === 87||event.keyCode === 83||event.keyCode === 73||event.keyCode === 75||event.keyCode === 69||event.keyCode === 68||event.keyCode === 85||event.keyCode ===  74||event.keyCode === 82||event.keyCode === 70||event.keyCode === 89||event.keyCode === 72 )
        this.pressedKeys[event.keyCode] = false;
    })

    //console.log(this.pressedKeys)
}

}