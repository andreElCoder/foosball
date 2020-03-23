class Player{
    constructor(game,x,y){
        this.game = game
        this.ctx = game.ctx
        this.x = x
        this.y = y
        this.speedY = 0
        this.shoot = false
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
displayHorizontallyLeft(){

    this.ctx.save()
//Neck
    this.ctx.beginPath()
    this.ctx.moveTo(this.x+22,this.y)
    this.ctx.lineTo(this.x+14,this.y)
    this.ctx.strokeStyle = "rgb(500, 206, 150)" // Skin tone
    this.ctx.lineWidth = 4
    this.ctx.stroke()
    this.ctx.closePath()
//Head
    this.ctx.beginPath()   
    this.ctx.strokeStyle = "black"
    this.ctx.lineWidth = 6 
    this.ctx.arc(this.x+24,this.y, 3, 0, 2 * Math.PI)
    this.ctx.stroke()
    this.ctx.closePath()

   //T-Shirt

    this.ctx.beginPath()
    this.ctx.moveTo(this.x+12,this.y-12)
    this.ctx.lineTo(this.x+12,this.y+12)
    this.ctx.strokeStyle = "rgb(100, 206, 150)" // Skin tone
    this.ctx.lineWidth = 6
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.beginPath()
    this.ctx.moveTo(this.x,this.y)
    this.ctx.lineTo(this.x+12,this.y)
    this.ctx.strokeStyle = "rgb(100, 206, 150)" // Skin tone
    this.ctx.lineWidth = 14
    this.ctx.stroke()
    //Arms

    //Left
    this.ctx.beginPath()
    this.ctx.moveTo(this.x+9,this.y-9)
    this.ctx.lineTo(this.x-2,this.y-9)
    this.ctx.strokeStyle = "rgb(800, 206, 150)" // Skin tone
    this.ctx.lineWidth = 5
    this.ctx.stroke()
    this.ctx.closePath()
    //Right
    this.ctx.beginPath()
    this.ctx.moveTo(this.x+9,this.y+9)
    this.ctx.lineTo(this.x-2,this.y+9)
    this.ctx.strokeStyle = "rgb(800, 206, 150)" // Skin tone
    this.ctx.lineWidth = 5
    this.ctx.stroke()

    //Shorts

    //Left
    this.ctx.beginPath()
    this.ctx.moveTo(this.x,this.y-3)
    this.ctx.lineTo(this.x-15,this.y-3)
    this.ctx.strokeStyle = "rgb(500, 206, 150)" // Skin tone
    this.ctx.lineWidth = 6
    this.ctx.stroke()
    this.ctx.closePath()
    //Right
    this.ctx.beginPath()
    this.ctx.moveTo(this.x,this.y+3)
    this.ctx.lineTo(this.x-15,this.y+3)
    this.ctx.strokeStyle = "rgb(500, 206, 150)" // Skin tone
    this.ctx.lineWidth = 6
    this.ctx.stroke()
    this.ctx.closePath()
    //Separation
    this.ctx.beginPath()
    this.ctx.moveTo(this.x,this.y)
    this.ctx.lineTo(this.x-15,this.y)
    this.ctx.strokeStyle = "black" // Skin tone
    this.ctx.lineWidth = 1
    this.ctx.stroke()
    this.ctx.closePath()
    
    // Feets

    //Left
    this.ctx.beginPath()
    this.ctx.moveTo(this.x-15,this.y-3)
    this.ctx.lineTo(this.x-20,this.y-3)
    this.ctx.strokeStyle = "rgb(900, 25, 150)" // Skin tone
    this.ctx.lineWidth = 6
    this.ctx.stroke()
    this.ctx.closePath()

    //Right

    this.ctx.beginPath()
    this.ctx.moveTo(this.x-15,this.y+3)
    this.ctx.lineTo(this.x-20,this.y+3)
    this.ctx.strokeStyle = "rgb(900, 25, 150)" // Skin tone
    this.ctx.lineWidth = 6
    this.ctx.stroke()

    //Separation
    this.ctx.beginPath()
    this.ctx.moveTo(this.x-15,this.y)
    this.ctx.lineTo(this.x-20,this.y)
    this.ctx.strokeStyle = "black" // Skin tone
    this.ctx.lineWidth = 1
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.restore()

}

displayHorizontallyRight(){

    this.ctx.save()
//Neck
    this.ctx.beginPath()
    this.ctx.moveTo(this.x-22,this.y)
    this.ctx.lineTo(this.x-14,this.y)
    this.ctx.strokeStyle = "rgb(500, 206, 150)" // Skin tone
    this.ctx.lineWidth = 4
    this.ctx.stroke()
    this.ctx.closePath()
//Head
    this.ctx.beginPath()   
    this.ctx.strokeStyle = "black"
    this.ctx.lineWidth = 6 
    this.ctx.arc(this.x-24,this.y, 3, 0, 2 * Math.PI)
    this.ctx.stroke()
    this.ctx.closePath()

   //T-Shirt

    this.ctx.beginPath()
    this.ctx.moveTo(this.x-12,this.y+12)
    this.ctx.lineTo(this.x-12,this.y-12)
    this.ctx.strokeStyle = "rgb(100, 206, 150)" // Skin tone
    this.ctx.lineWidth = 6
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.beginPath()
    this.ctx.moveTo(this.x,this.y)
    this.ctx.lineTo(this.x-12,this.y)
    this.ctx.strokeStyle = "rgb(100, 206, 150)" // Skin tone
    this.ctx.lineWidth = 14
    this.ctx.stroke()
    //Arms

    //Left
    this.ctx.beginPath()
    this.ctx.moveTo(this.x-9,this.y+9)
    this.ctx.lineTo(this.x+2,this.y+9)
    this.ctx.strokeStyle = "rgb(800, 206, 150)" // Skin tone
    this.ctx.lineWidth = 5
    this.ctx.stroke()
    this.ctx.closePath()
    //Right
    this.ctx.beginPath()
    this.ctx.moveTo(this.x-9,this.y-9)
    this.ctx.lineTo(this.x+2,this.y-9)
    this.ctx.strokeStyle = "rgb(800, 206, 150)" // Skin tone
    this.ctx.lineWidth = 5
    this.ctx.stroke()

    //Shorts

    //Left
    this.ctx.beginPath()
    this.ctx.moveTo(this.x,this.y+3)
    this.ctx.lineTo(this.x+15,this.y+3)
    this.ctx.strokeStyle = "rgb(500, 206, 150)" // Skin tone
    this.ctx.lineWidth = 6
    this.ctx.stroke()
    this.ctx.closePath()
    //Right
    this.ctx.beginPath()
    this.ctx.moveTo(this.x,this.y-3)
    this.ctx.lineTo(this.x+15,this.y-3)
    this.ctx.strokeStyle = "rgb(500, 206, 150)" // Skin tone
    this.ctx.lineWidth = 6
    this.ctx.stroke()
    this.ctx.closePath()
    //Separation
    this.ctx.beginPath()
    this.ctx.moveTo(this.x,this.y)
    this.ctx.lineTo(this.x+15,this.y)
    this.ctx.strokeStyle = "black" // Skin tone
    this.ctx.lineWidth = 1
    this.ctx.stroke()
    this.ctx.closePath()
    
    // Feets

    //Left
    this.ctx.beginPath()
    this.ctx.moveTo(this.x+15,this.y+3)
    this.ctx.lineTo(this.x+20,this.y+3)
    this.ctx.strokeStyle = "rgb(900, 25, 150)" // Skin tone
    this.ctx.lineWidth = 6
    this.ctx.stroke()
    this.ctx.closePath()

    //Right

    this.ctx.beginPath()
    this.ctx.moveTo(this.x+15,this.y-3)
    this.ctx.lineTo(this.x+20,this.y-3)
    this.ctx.strokeStyle = "rgb(900, 25, 150)" // Skin tone
    this.ctx.lineWidth = 6
    this.ctx.stroke()

    //Separation
    this.ctx.beginPath()
    this.ctx.moveTo(this.x+15,this.y)
    this.ctx.lineTo(this.x+20,this.y)
    this.ctx.strokeStyle = "black" // Skin tone
    this.ctx.lineWidth = 1
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.restore()
}

moveUp() {
    console.log("Speed change")
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
shootOn(){
    this.shoot=true
}
shootOff(){
    this.shoot=false
}
checkTouchBall(ball){ 
//Ball radius is 5 ( also added as tolerance/interval or this condition eg: ball.x===this-x almost never happen)
//  <ball.x<
    if(ball.x+5 < this.x-5 && ball.x+15>this.x-5 && ball.y >this.y-10 && ball.y<this.y+10 && ball.speedX>0){// Ball touch left side of player
        console.log("Ball touch left side of player")
        ball.speedX=-ball.speedX
    }  
    if(ball.x-10 < this.x+5 && ball.x>this.x+5  &&  ball.y >this.y-10 && ball.y<this.y+10&& ball.speedX<0){ // Ball touch rigth side of player
        console.log("Ball touch right side of player")
        ball.speedX=-ball.speedX
    }
    if(ball.y+5 < this.y-5 && ball.y+15 > this.y-5 && ball.x >this.x-10 && ball.x<this.x+10 && ball.speedY>0){ // Ball touch upper side of player
        console.log("Ball touch upper side of player")
        ball.speedY=-ball.speedY
    }
    if(ball.y-10 < this.y+5 && ball.y>this.y+5  &&  ball.x >this.x-10 && ball.x<this.x+10 && ball.speedY<0){ // Ball touch bottom side of player
        console.log("Ball touch bottom side of player")
        ball.speedY=-ball.speedY
    }
}

}