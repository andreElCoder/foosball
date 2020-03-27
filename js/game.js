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
    this.pressedKeysUp= {}
    this.pressedKeysDown= {}    
    this.keysPressed();
    this.gameStatus="game"   
    }
start() {
    if (this.gameStatus === "game") {
        this.createTeams();
        this.ball.throughBall();
        this.updateGame()
        }
      }
updateGame(){
    this.animationId = window.requestAnimationFrame(() => {
        if (this.gameStatus === "game") {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.field.displayField();
        this.displayTeams()
        this.displayBall()
        this.updateGame()
        } 
        if (this.gameStatus === "game-over") {
            window.cancelAnimationFrame(this.animationId);
            const btn = document.createElement("BUTTON");
            btn.innerHTML = "Play Again";
            btn.setAttribute("id","play-again")
            //this.$canvas.outerHTML=""
            document.getElementById("menu").appendChild(btn)
            btn.addEventListener("click",()=>{
                this.gameStatus = "game"
                btn.outerHTML=""
                this.score.restartScore()
                this.score.updateScore()
                this.ball.throughBall()
                this.updateGame()
                
            })            
        }
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
        if(!player1.shootDisplay) 
        player1.displayPlayer()
        else{player1.displayHorizontallyLeft()} 
        player1.updatePlayer();
        player1.checkTouchBall()
    });
    this.playersTeam2.forEach(player2=> {
        if(!player2.shootDisplay)
        player2.displayPlayer()
        else{player2.displayHorizontallyRight()} 
        player2.updatePlayer()
        player2.checkTouchBall()     
    });this.checkPlayerOnBoundaries()
}
displayBall(){
    this.checkBallOnBoundaries()
    this.ball.friction()
    this.ball.updateBall()
    this.ball.displayBall()
}

checkBallOnBoundaries(){
    if(this.ball.x<60 && this.ball.y>235 && this.ball.y<this.height-235){               //Goal area 1
        this.ball.throughBall()
        this.score.goalTeam1()
        //this.score.updateScore()
        if(this.score.gameOver())
        this.gameStatus ="game-over"                                                      
    }
    else if(this.ball.x> this.width-60 && this.ball.y>235 && this.ball.y<this.height-235){  //Goal area 2
        this.ball.throughBall()
        this.score.goalTeam2()                                                        
        //this.score.updateScore()
        if(this.score.gameOver())
        this.gameStatus ="game-over"
    }
    else if(this.ball.x<60 || this.ball.x > this.width-60) this.ball.speedX=-this.ball.speedX
    else if(this.ball.y<60 || this.ball.y > this.height-60) this.ball.speedY=-this.ball.speedY
    
}
checkPlayerOnBoundaries(){

    if (this.playersTeam1[0].y<=235 || this.playersTeam1[0].y>this.height-235) {
        this.playersTeam1[0].notMoving()
    }
    if (this.playersTeam2[10].y<=235 || this.playersTeam2[10].y>this.height-235) {
        this.playersTeam2[10].notMoving()
    }
   
    if (this.playersTeam1[1].y<50 || this.playersTeam1[2].y>this.height-50 ) {
        this.playersTeam1[1].notMoving()
        this.playersTeam1[2].notMoving()
    }
    if (this.playersTeam2[8].y<50 || this.playersTeam2[9].y>this.height-50) {
        this.playersTeam2[9].notMoving()
        this.playersTeam2[8].notMoving()
    }
    if (this.playersTeam1[3].y<50 || this.playersTeam1[7].y>this.height-50) {
        this.playersTeam1[3].notMoving()
        this.playersTeam1[4].notMoving()
        this.playersTeam1[5].notMoving()
        this.playersTeam1[6].notMoving()
        this.playersTeam1[7].notMoving()
    }
    if (this.playersTeam2[3].y<50 || this.playersTeam2[7].y>this.height-50) {
        this.playersTeam2[7].notMoving()
        this.playersTeam2[6].notMoving()
        this.playersTeam2[5].notMoving()
        this.playersTeam2[4].notMoving()
        this.playersTeam2[3].notMoving()
    }
    if (this.playersTeam1[8].y<50 || this.playersTeam1[10].y>this.height-50 ) {
        this.playersTeam1[8].notMoving()
        this.playersTeam1[9].notMoving()
        this.playersTeam1[10].notMoving()
    }
    if (this.playersTeam2[0].y<50 || this.playersTeam2[2].y>this.height-50 ) {
        this.playersTeam2[2].notMoving()
        this.playersTeam2[1].notMoving()
        this.playersTeam2[0].notMoving()
    }

}

keysPressed(){
    
    window.addEventListener("keydown", event => {
        if(event.keyCode ===81 ||event.keyCode === 65||event.keyCode === 79||event.keyCode === 76||event.keyCode === 87||event.keyCode === 83||event.keyCode === 73||event.keyCode === 75||event.keyCode === 69||event.keyCode === 68||event.keyCode === 85||event.keyCode ===  74||event.keyCode === 82||event.keyCode === 70||event.keyCode === 89||event.keyCode === 72 || event.keyCode === 90 || event.keyCode === 88|| event.keyCode === 67|| event.keyCode === 86 || event.keyCode === 190 || event.keyCode === 188|| event.keyCode === 77|| event.keyCode === 78){
            this.pressedKeysDown[event.keyCode] = true
           this.playerKeyDownLogic()
        }
    })
    window.addEventListener('keyup', event => {
        if(event.keyCode ===81 ||event.keyCode === 65||event.keyCode === 79||event.keyCode === 76||event.keyCode === 87||event.keyCode === 83||event.keyCode === 73||event.keyCode === 75||event.keyCode === 69||event.keyCode === 68||event.keyCode === 85||event.keyCode ===  74||event.keyCode === 82||event.keyCode === 70||event.keyCode === 89||event.keyCode === 72 || event.keyCode === 90 || event.keyCode === 88|| event.keyCode === 67|| event.keyCode === 86 || event.keyCode === 190 || event.keyCode === 188|| event.keyCode === 77|| event.keyCode === 78){
            this.pressedKeysUp[event.keyCode] = true
            this.playerKeyUpLogic()
        }
    })
}

playerKeyDownLogic(){
    console.log("Down")
    console.log(this.pressedKeysDown)
    console.log(this.playersTeam1)
    //GK -Team1 UP=Q Down=A Shot=Z
    if(this.pressedKeysDown[90]){
        this.playersTeam1[0].shootOn()
        this.pressedKeysDown[90]=false
    }
    
    if (this.pressedKeysDown[81] && this.playersTeam1[0].y>235) {
        this.playersTeam1[0].moveUp()
        this.pressedKeysDown[81]=false
        }
    else if (this.pressedKeysDown[65] && this.playersTeam1[0].y<this.height-235) {  
        this.playersTeam1[0].moveDown()
        this.pressedKeysDown[65]=false
    }
    //GK -Team2 UP=O Down= L Shot=.
    if(this.pressedKeysDown[190]){
        this.playersTeam2[10].shootOn()
        this.pressedKeysDown[190]=false
    }
    
    if (this.pressedKeysDown[79] && this.playersTeam2[10].y>235) {
        this.playersTeam2[10].moveUp()
        this.pressedKeysDown[79]=false
    }
    else if (this.pressedKeysDown[76] && this.playersTeam2[10].y<this.height-235){
        this.playersTeam2[10].moveDown()
        this.pressedKeysDown[76]=false
    } 
    //DF -Team1 UP=W Down= S Shot=X
    if(this.pressedKeysDown[88] ){
        this.playersTeam1[1].shootOn()
        this.playersTeam1[2].shootOn()
        this.pressedKeysDown[88]=false
    }
    if (this.pressedKeysDown[87] && this.playersTeam1[1].y>50){

        this.playersTeam1[1].moveUp()
        this.playersTeam1[2].moveUp()
        this.pressedKeysDown[87]=false
    }
    else if (this.pressedKeysDown[83] && this.playersTeam1[2].y<this.height-50) {

        this.playersTeam1[1].moveDown()
        this.playersTeam1[2].moveDown()
        this.pressedKeysDown[83]=false
    }    
    //DF -Team2 UP=I Down= K
    if(this.pressedKeysDown[188]){
        this.playersTeam2[9].shootOn()
        this.playersTeam2[8].shootOn()
        this.pressedKeysDown[188]=false
    }
    if (this.pressedKeysDown[73] && this.playersTeam2[8].y>50) {
        this.playersTeam2[9].moveUp()
        this.playersTeam2[8].moveUp()
        this.pressedKeysDown[73]=false
    }
    else if (this.pressedKeysDown[75] && this.playersTeam2[9].y<this.height-50) {
        this.playersTeam2[9].moveDown()
        this.playersTeam2[8].moveDown()
        this.pressedKeysDown[75]=false
    }

    //MID -Team1 UP=E Down= D
    if(this.pressedKeysDown[67]){
        this.playersTeam1[3].shootOn()
        this.playersTeam1[4].shootOn()
        this.playersTeam1[5].shootOn()
        this.playersTeam1[6].shootOn()
        this.playersTeam1[7].shootOn()
        this.pressedKeysDown[67]=false
    }
    if (this.pressedKeysDown[69] && this.playersTeam1[3].y>50) {
        this.playersTeam1[3].moveUp()
        this.playersTeam1[4].moveUp()
        this.playersTeam1[5].moveUp()
        this.playersTeam1[6].moveUp()
        this.playersTeam1[7].moveUp()
        this.pressedKeysDown[69]=false
    }
    else if (this.pressedKeysDown[68] && this.playersTeam1[7].y<this.height-50) {
        this.playersTeam1[3].moveDown()
        this.playersTeam1[4].moveDown()
        this.playersTeam1[5].moveDown()
        this.playersTeam1[6].moveDown()
        this.playersTeam1[7].moveDown()
        this.pressedKeysDown[68]=false
    }

    //MID -Team2 UP=U Down= J
    if(this.pressedKeysDown[77]){
        this.playersTeam2[7].shootOn()
        this.playersTeam2[6].shootOn()
        this.playersTeam2[5].shootOn()
        this.playersTeam2[4].shootOn()
        this.playersTeam2[3].shootOn()
        this.pressedKeysDown[77]=false

    }
    if (this.pressedKeysDown[85] && this.playersTeam2[3].y>50) {
        this.playersTeam2[7].moveUp()
        this.playersTeam2[6].moveUp()
        this.playersTeam2[5].moveUp()
        this.playersTeam2[4].moveUp()
        this.playersTeam2[3].moveUp()
        this.pressedKeysDown[85]=false
    }
    else if (this.pressedKeysDown[74] && this.playersTeam2[7].y<this.height-50) {
        this.playersTeam2[7].moveDown()
        this.playersTeam2[6].moveDown()
        this.playersTeam2[5].moveDown()
        this.playersTeam2[4].moveDown()
        this.playersTeam2[3].moveDown()
        this.pressedKeysDown[74]=false
    }

    //FW -Team1 UP=R Down=F
    if(this.pressedKeysDown[86]){
        this.playersTeam1[8].shootOn()
        this.playersTeam1[9].shootOn()
        this.playersTeam1[10].shootOn()
        this.pressedKeysDown[86]=false
    }
    if (this.pressedKeysDown[82] && this.playersTeam1[8].y>50) {
        this.playersTeam1[8].moveUp()
        this.playersTeam1[9].moveUp()
        this.playersTeam1[10].moveUp()
        this.pressedKeysDown[82]=false
    }
    else if (this.pressedKeysDown[70] && this.playersTeam1[10].y<this.height-50) {
        this.playersTeam1[8].moveDown()
        this.playersTeam1[9].moveDown()
        this.playersTeam1[10].moveDown()
        this.pressedKeysDown[70]=false
    }
    //FW -Team2 UP=Y Down=H
    if(this.pressedKeysDown[78]){
        this.playersTeam2[2].shootOn()
        this.playersTeam2[1].shootOn()
        this.playersTeam2[0].shootOn()
        this.pressedKeysDown[78]=false
    }

    if (this.pressedKeysDown[89] && this.playersTeam2[0].y>50){
        this.playersTeam2[2].moveUp()
        this.playersTeam2[1].moveUp()
        this.playersTeam2[0].moveUp()
        this.pressedKeysDown[89]=false
    }
    else if (this.pressedKeysDown[72] && this.playersTeam2[2].y<this.height-50){
        this.playersTeam2[2].moveDown()
        this.playersTeam2[1].moveDown()
        this.playersTeam2[0].moveDown()
        this.pressedKeysDown[72]=false
    }
}

playerKeyUpLogic(){
        console.log("UP")
        console.log(this.pressedKeysUp)
           //GK -Team1 UP=Q Down=A Shot=Z
        if(this.pressedKeysUp[90]){
            this.playersTeam1[0].shootOff()
            this.pressedKeysUp[90]=false
            
        }console.log("0")
        if (this.pressedKeysUp[81] || this.pressedKeysUp[65]) {
            this.playersTeam1[0].notMoving()
            this.pressedKeysUp[81]=false
            this.pressedKeysUp[65]=false
        }
            console.log("1")
        //GK -Team2 UP=O Down= L Shot=.
        if(this.pressedKeysUp[190])
        {
            this.playersTeam2[10].shootOff()
            this.pressedKeysUp[190]=false 
        }
        if (this.pressedKeysUp[79] ||this.pressedKeysUp[76])  {
            this.playersTeam2[10].notMoving()
            this.pressedKeysUp[79]=false
            this.pressedKeysUp[76]=false
        }
        console.log("3")
        //DF -Team1 UP=W Down= S Shot=X
        if(this.pressedKeysUp[88]){
            console.log("reach shootOff DF TEAM1")
            this.playersTeam1[1].shootOff()
            this.playersTeam1[2].shootOff()
            this.pressedKeysUp[88]=false
            console.log("1")
        }
        if (this.pressedKeysUp[87] || this.pressedKeysUp[83]) {
           this.playersTeam1[1].notMoving()
           this.playersTeam1[2].notMoving()
           this.pressedKeysUp[87]=false
           this.pressedKeysUp[83]=false
        }
        //DF -Team2 UP=I Down= K
        if(this.pressedKeysUp[188]){
            this.playersTeam2[9].shootOff()
            this.playersTeam2[8].shootOff()
            this.pressedKeysUp[188]=false
        }
        if (this.pressedKeysUp[73] || this.pressedKeysUp[75]) {
            this.playersTeam2[9].notMoving()
            this.playersTeam2[8].notMoving()
            this.pressedKeysUp[73]=false
            this.pressedKeysUp[75]=false

        }
        //MID -Team1 UP=E Down= D
        if(this.pressedKeysUp[67]){
            this.playersTeam1[3].shootOff()
            this.playersTeam1[4].shootOff()
            this.playersTeam1[5].shootOff()
            this.playersTeam1[6].shootOff()
            this.playersTeam1[7].shootOff()
            this.pressedKeysUp[67]=false
            console.log("2")
        }
        if (this.pressedKeysUp[69] || this.pressedKeysUp[68]) {
            this.playersTeam1[3].notMoving()
            this.playersTeam1[4].notMoving()
            this.playersTeam1[5].notMoving()
            this.playersTeam1[6].notMoving()
            this.playersTeam1[7].notMoving()
            this.pressedKeysUp[69]=false
            this.pressedKeysUp[68]=false
        }
        //MID -Team2 UP=U Down= J
        if(this.pressedKeysUp[77]){

            this.playersTeam2[7].shootOff()
            this.playersTeam2[6].shootOff()
            this.playersTeam2[5].shootOff()
            this.playersTeam2[4].shootOff()
            this.playersTeam2[3].shootOff()
            this.pressedKeysUp[77]=false
            
        }
        if (this.pressedKeysUp[85] || this.pressedKeysUp[74]) {
            this.playersTeam2[7].notMoving()
            this.playersTeam2[6].notMoving()
            this.playersTeam2[5].notMoving()
            this.playersTeam2[4].notMoving()
            this.playersTeam2[3].notMoving()
            this.pressedKeysUp[85]=false
            this.pressedKeysUp[74]=false
        }
        //FW -Team1 UP=R Down=F
        if(this.pressedKeysUp[86]){
            this.playersTeam1[8].shootOff()
            this.playersTeam1[9].shootOff()
            this.playersTeam1[10].shootOff()
            this.pressedKeysUp[86]=false
        }
        if (this.pressedKeysUp[82] || this.pressedKeysUp[70]){
            this.playersTeam1[8].notMoving()
            this.playersTeam1[9].notMoving()
            this.playersTeam1[10].notMoving()
            this.pressedKeysUp[82]=false
            this.pressedKeysUp[70]=false
        }
        //FW -Team2 UP=Y Down=H
        if(this.pressedKeysUp[78]){
            this.playersTeam2[2].shootOff()
            this.playersTeam2[1].shootOff()
            this.playersTeam2[0].shootOff()
            this.pressedKeysUp[78]=false
        }
        if (this.pressedKeysUp[89] || this.pressedKeysUp[72]) {
            this.playersTeam2[2].notMoving()
            this.playersTeam2[1].notMoving()
            this.playersTeam2[0].notMoving()
            this.pressedKeysUp[89]=false
            this.pressedKeysUp[72]=false
        }
    }


movePlayers(){
    //GK -Team1 UP=Q Down=A Shot=Z
    if(this.pressedKeys[90]){
        this.playersTeam1[0].shootOn()
    }
    if(!this.pressedKeys[90]){
        this.playersTeam1[0].shootOff()
    }
    if (this.pressedKeys[81] && this.playersTeam1[0].y>235) {
        this.playersTeam1[0].moveUp()
        
    }
    else if (this.pressedKeys[65] && this.playersTeam1[0].y<this.height-235) {  
        this.playersTeam1[0].moveDown()
    }
    else{this.playersTeam1[0].notMoving()}

    //GK -Team2 UP=O Down= L Shot=.
    if(this.pressedKeys[190]){
        this.playersTeam2[10].shootOn()
    }
    else{
        this.playersTeam2[10].shootOff()
    }
    if (this.pressedKeys[79] && this.playersTeam2[10].y>235) {
        this.playersTeam2[10].moveUp()
    }
    else if (this.pressedKeys[76] && this.playersTeam2[10].y<this.height-235)  {
        this.playersTeam2[10].moveDown()
    } 
    else{this.playersTeam2[10].notMoving()
    }

    //DF -Team1 UP=W Down= S Shot=X
    if(this.pressedKeys[88]){
        this.playersTeam1[1].shootOn()
        this.playersTeam1[2].shootOn()

    }
    else{
        this.playersTeam1[1].shootOff();
        //this.playersTeam1[1].checkTouchBall(this.ball)
        this.playersTeam1[2].shootOff()
    }
    if (this.pressedKeys[87] && this.playersTeam1[1].y>=50) {
        this.playersTeam1[1].moveUp()
        this.playersTeam1[2].moveUp()
    }
    else if (this.pressedKeys[83] && this.playersTeam1[2].y<=this.height-50) {
        this.playersTeam1[1].moveDown()
        this.playersTeam1[2].moveDown()
    }    
    else{this.playersTeam1[1].notMoving()
        this.playersTeam1[2].notMoving()
    }
    //DF -Team2 UP=I Down= K
    if(this.pressedKeys[188]){
        this.playersTeam2[9].shootOn()
        this.playersTeam2[8].shootOn()
    }
    else{
        this.playersTeam2[9].shootOff()
        this.playersTeam2[8].shootOff()
    }
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
    if(this.pressedKeys[67]){
        this.playersTeam1[3].shootOn()
        this.playersTeam1[4].shootOn()
        this.playersTeam1[5].shootOn()
        this.playersTeam1[6].shootOn()
        this.playersTeam1[7].shootOn()

    }
    else{
        this.playersTeam1[3].shootOff()
        this.playersTeam1[4].shootOff()
        this.playersTeam1[5].shootOff()
        this.playersTeam1[6].shootOff()
        this.playersTeam1[7].shootOff()
        
    }
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
    if(this.pressedKeys[77]){
        this.playersTeam2[7].shootOn()
        this.playersTeam2[6].shootOn()
        this.playersTeam2[5].shootOn()
        this.playersTeam2[4].shootOn()
        this.playersTeam2[3].shootOn()

    }
    else{
        this.playersTeam2[7].shootOff()
        this.playersTeam2[6].shootOff()
        this.playersTeam2[5].shootOff()
        this.playersTeam2[4].shootOff()
        this.playersTeam2[3].shootOff()
        
    }
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
    if(this.pressedKeys[86]){
        this.playersTeam1[8].shootOn()
        this.playersTeam1[9].shootOn()
        this.playersTeam1[10].shootOn()
    }
    else{
        this.playersTeam1[8].shootOff()
        this.playersTeam1[9].shootOff()
        this.playersTeam1[10].shootOff()
    }
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
    if(this.pressedKeys[78]){
        this.playersTeam2[2].shootOn()
        this.playersTeam2[1].shootOn()
        this.playersTeam2[0].shootOn()
    }
    else{
        this.playersTeam2[2].shootOff()
        this.playersTeam2[1].shootOff()
        this.playersTeam2[0].shootOff()
    }
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
