class Game {
    constructor(canvas){
    this.$canvas=canvas
    this.ctx = this.$canvas.getContext("2d");
    this.width = this.$canvas.width;
    this.height= this.$canvas.height;
    this.field=new Field(this)
    this.playersTeam1=[];
    this.playersTeam2=[];
    this.ball = new Ball(this)
    this.score = new Score(this);
    this.animationId;
    this.pressedKeys= {}   
    this.keysPressed();   
    }

updateGame(){
    this.animationId = window.requestAnimationFrame(() => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.field.displayField();
        this.displayTeams()
        this.displayBall()
        this.movePlayers()
        this.updateGame()
    })
}
createTeams(){
    for(let x=60;x<=this.width-60;x+=(this.width-120)/7){
        switch(x){// Representes the this.x of the player,begins at 60 because of the borders
            case 60 :                                                                  //GK team1
            this.playersTeam1.push(new Player(this,x,this.height/2))                   
                break
            case 60+(this.width-120)/7 :                                               //DF team1
                for(let y=250;y<=this.height-250;y+=(this.height-500))
                this.playersTeam1.push(new Player(this,x,y))
                break
            case 60+2*(this.width-120)/7:                                              //FW team2
                for(let y=160;y<=this.height-160;y+=(this.height-320)/2)
                this.playersTeam2.push(new Player(this,x,y))
                break
            case 60+3*(this.width-120)/7:                                              //MD team1
                for(let y=120;y<=this.height-120;y+=(this.height-240)/4)
                this.playersTeam1.push(new Player(this,x,y))
                break
            case 60+4*(this.width-120)/7:                                              //MD team2
                for(let y=120;y<=this.height-120;y+=(this.height-240)/4)
                this.playersTeam2.push(new Player(this,x,y))
                break
            case 60+5*(this.width-120)/7:                                              //FW team1
                for(let y=160;y<=this.height-160;y+=(this.height-320)/2)
                this.playersTeam1.push(new Player(this,x,y))
                break
            case 60+6*(this.width-120)/7:                                              //DF team2
                for(let y=250;y<=this.height-250;y+=(this.height-500))
                this.playersTeam2.push(new Player(this,x,y))
                break
            case this.width-60 :                                                       //GK team2
                this.playersTeam2.push(new Player(this,x,this.height/2))
                break        
        }
}
}
displayTeams(){
    this.playersTeam1.forEach(player1=> {
        if(!player1.shoot) 
        player1.displayPlayer()
        else{player1.displayHorizontallyLeft()} 
        player1.updatePlayer()
        player1.checkTouchBall(this.ball)
    });
    this.playersTeam2.forEach(player2=> {
        if(!player2.shoot)
        player2.displayPlayer()
        else{player2.displayHorizontallyRight()} 
        player2.updatePlayer()
        player2.checkTouchBall(this.ball)     
    });
}
displayBall(){
    this.checkBallOnBoundaries()
    this.ball.updateBall()
    this.ball.displayBall()
}

checkBallOnBoundaries(){
    if(this.ball.x<60 && this.ball.y>235 && this.ball.y<this.height-235){               //Goal area 1
        this.ball.throughBall();
        this.score.goalTeam1()
        this.score.updateScore()                                                      
    }
    else if(this.ball.x> this.width-60 && this.ball.y>235 && this.ball.y<this.height-235){  //Goal area 2
        this.ball.throughBall();
        this.score.goalTeam2()                                                        
        this.score.updateScore()
    }
    else if(this.ball.x<60 || this.ball.x > this.width-60) this.ball.speedX=-this.ball.speedX
    else if(this.ball.y<60 || this.ball.y > this.height-60) this.ball.speedY=-this.ball.speedY
    
}
keysPressed(){
    
    window.addEventListener("keydown", event => {
        if(event.keyCode ===81 ||event.keyCode === 65||event.keyCode === 79||event.keyCode === 76||event.keyCode === 87||event.keyCode === 83||event.keyCode === 73||event.keyCode === 75||event.keyCode === 69||event.keyCode === 68||event.keyCode === 85||event.keyCode ===  74||event.keyCode === 82||event.keyCode === 70||event.keyCode === 89||event.keyCode === 72 || event.keyCode === 90 ){
            this.pressedKeys[event.keyCode] = true
        }
       
    })
    window.addEventListener('keyup', event => {
        if(event.keyCode ===81 ||event.keyCode === 65||event.keyCode === 79||event.keyCode === 76||event.keyCode === 87||event.keyCode === 83||event.keyCode === 73||event.keyCode === 75||event.keyCode === 69||event.keyCode === 68||event.keyCode === 85||event.keyCode ===  74||event.keyCode === 82||event.keyCode === 70||event.keyCode === 89||event.keyCode === 72 || event.keyCode === 90 ){
            this.pressedKeys[event.keyCode] = false
        }
    })
}

movePlayers(){
    console.log(this.pressedKeys)
        if(this.pressedKeys[90]){
            console.log(this.playersTeam1[0])
            this.playersTeam1[0].shootOn()
        }
        else{
            this.playersTeam1[0].shootOff()
        }
        //GK -Team1 UP=Q Down= At
        if (this.pressedKeys[81] && this.playersTeam1[0].y>235) {
            this.playersTeam1[0].moveUp()
        }
        else if (this.pressedKeys[65] && this.playersTeam1[0].y<this.height-235) {  
            this.playersTeam1[0].moveDown()
        }
        else{this.playersTeam1[0].notMoving()}

        //GK -Team2 UP=O Down= L
        if (this.pressedKeys[79] && this.playersTeam2[10].y>235) {
            this.playersTeam2[10].moveUp()
        }
        else if (this.pressedKeys[76] && this.playersTeam2[10].y<this.height-235)  {
            this.playersTeam2[10].moveDown()
        } 
        else{this.playersTeam2[10].notMoving()
        }

        //DF -Team1 UP=W Down= S
        if (this.pressedKeys[87] && this.playersTeam1[1].y>50) {
            this.playersTeam1[1].moveUp()
            this.playersTeam1[2].moveUp()
        }
        else if (this.pressedKeys[83] && this.playersTeam1[2].y<this.height-50) {
            this.playersTeam1[1].moveDown()
            this.playersTeam1[2].moveDown()
        }    
        else{this.playersTeam1[1].notMoving()
            this.playersTeam1[2].notMoving()
        }
        //DF -Team2 UP=I Down= K
        if (this.pressedKeys[73] && this.playersTeam2[8].y>50) {
            this.playersTeam2[9].moveUp()
            this.playersTeam2[8].moveUp()
        }
        else if (this.pressedKeys[75] && this.playersTeam2[9].y<this.height-50) {
            this.playersTeam2[9].moveDown()
            this.playersTeam2[8].moveDown()
        }
        else{this.playersTeam2[9].notMoving()
            this.playersTeam2[8].notMoving()
        }   
        //MID -Team1 UP=E Down= D
        if (this.pressedKeys[69] && this.playersTeam1[3].y>50) {
            this.playersTeam1[3].moveUp()
            this.playersTeam1[4].moveUp()
            this.playersTeam1[5].moveUp()
            this.playersTeam1[6].moveUp()
            this.playersTeam1[7].moveUp()
        }
        else if (this.pressedKeys[68] && this.playersTeam1[7].y<this.height-50) {
            this.playersTeam1[3].moveDown()
            this.playersTeam1[4].moveDown()
            this.playersTeam1[5].moveDown()
            this.playersTeam1[6].moveDown()
            this.playersTeam1[7].moveDown()
        }
        else{this.playersTeam1[3].notMoving()
            this.playersTeam1[4].notMoving()
            this.playersTeam1[5].notMoving()
            this.playersTeam1[6].notMoving()
            this.playersTeam1[7].notMoving()
        }
        //MID -Team2 UP=U Down= J
        if (this.pressedKeys[85] && this.playersTeam2[3].y>50) {
            this.playersTeam2[7].moveUp()
            this.playersTeam2[6].moveUp()
            this.playersTeam2[5].moveUp()
            this.playersTeam2[4].moveUp()
            this.playersTeam2[3].moveUp()
        }
        else if (this.pressedKeys[74] && this.playersTeam2[7].y<this.height-50) {
            this.playersTeam2[7].moveDown()
            this.playersTeam2[6].moveDown()
            this.playersTeam2[5].moveDown()
            this.playersTeam2[4].moveDown()
            this.playersTeam2[3].moveDown()
        }
        else{this.playersTeam2[7].notMoving()
            this.playersTeam2[6].notMoving()
            this.playersTeam2[5].notMoving()
            this.playersTeam2[4].notMoving()
            this.playersTeam2[3].notMoving()
        }
        //FW -Team1 UP=R Down=F
        if (this.pressedKeys[82] && this.playersTeam1[8].y>50) {
            this.playersTeam1[8].moveUp()
            this.playersTeam1[9].moveUp()
            this.playersTeam1[10].moveUp()
        }
        else if (this.pressedKeys[70] && this.playersTeam1[10].y<this.height-50) {
            this.playersTeam1[8].moveDown()
            this.playersTeam1[9].moveDown()
            this.playersTeam1[10].moveDown()
        }
        else{this.playersTeam1[8].notMoving()
            this.playersTeam1[9].notMoving()
            this.playersTeam1[10].notMoving()
        }
        //FW -Team2 UP=Y Down=H
        if (this.pressedKeys[89] && this.playersTeam2[0].y>50) {
            this.playersTeam2[2].moveUp()
            this.playersTeam2[1].moveUp()
            this.playersTeam2[0].moveUp()
        }
        else if (this.pressedKeys[72] && this.playersTeam2[2].y<this.height-50) {
            this.playersTeam2[2].moveDown()
            this.playersTeam2[1].moveDown()
            this.playersTeam2[0].moveDown()
        }
        else{this.playersTeam2[2].notMoving()
            this.playersTeam2[1].notMoving()
            this.playersTeam2[0].notMoving()
        }
}
}
