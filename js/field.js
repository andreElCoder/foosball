class Field{
    constructor(game){
    this.game=game
    this.ctx= game.ctx
}

displayField(){
    //Borders 
    this.ctx.save()
    this.ctx.fillStyle="brown"
    this.ctx.fillRect(0,0,this.game.width,this.game.height)
    this.ctx.fillStyle="white"
    this.ctx.fillRect(25,25,this.game.width-50,this.game.height-50)
    this.ctx.fillStyle="green"
    this.ctx.fillRect(50,50,this.game.width-100,this.game.height-100)
    this.ctx.fillStroke="white"
    //midField
    this.ctx.beginPath()
    this.ctx.strokeStyle = "white"
    this.ctx.lineWidth = 25
    this.ctx.arc(this.game.width/2, this.game.height/2, 100, 0, 2 * Math.PI)
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.beginPath()
    this.ctx.arc(this.game.width/2, this.game.height/2, 5, 0, 2 * Math.PI)
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.beginPath()
    this.ctx.moveTo(this.game.width/2,50)
    this.ctx.lineTo(this.game.width/2,this.game.height-50)
    this.ctx.lineWidth = 25
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.beginPath()
    
    //Goal areas
    this.ctx.fillStyle="white"
    this.ctx.strokeRect(40,this.game.height/4,this.game.width/8,this.game.height/2)
    this.ctx.strokeRect(this.game.width-215,this.game.height/4,this.game.width/8,this.game.height/2)
    //Goal
    this.ctx.beginPath()
    this.ctx.strokeStyle = "rgb(58, 40, 1)"
    this.ctx.moveTo(this.game.width-39,225)
    this.ctx.lineTo(this.game.width-39,this.game.height-225)
    this.ctx.lineWidth = 28
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.beginPath()
    this.ctx.strokeStyle = "rgb(58, 40, 1)"
    this.ctx.moveTo(39,225)
    this.ctx.lineTo(39,this.game.height-225)
    this.ctx.lineWidth = 28
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.restore()
}
}
