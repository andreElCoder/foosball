class Game {
    constructor(canvas){
    this.$canvas=canvas
    this.ctx = this.$canvas.getContext("2d");
    this.width = this.$canvas.width;
    this.height= this.$canvas.height;
    this.field=new Field(this)
    this.playersTeam1=[];
    this.playersTeam2=[];
    this.ball = new Ball(this);
    this.animationId;
    }

updateGame(){
    this.animationId = window.requestAnimationFrame(() => {
        this.movePlayers()
        this.displayTeams()
        this.displayBall()
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
        player1.displayPlayer()
    });
    this.playersTeam2.forEach(player2=> {
        player2.displayPlayer()
    });
}
displayBall(){
    this.ball.checkBallOnBoundaries();
    this.ball.updateBall();
    this.ball.displayBall();
}
movePlayers(){

    window.addEventListener("keydown", event => { 
        //GK -Team1 UP=Q Down= A
        if (event.keyCode === 81) {
            console.log(this.playersTeam1)
            this.playersTeam1[0].moveUp()
        }
        if (event.keyCode === 65) {
            this.playersTeam1[0].moveDown()
        }
        //GK -Team2 UP=O Down= L
        if (event.keyCode === 79) {
            this.playersTeam2[10].moveUp()
        }
        if (event.keyCode === 76) {
            this.playersTeam2[10].moveDown()
        }
        //DF -Team1 UP=W Down= S
        if (event.keyCode === 87) {
            this.playersTeam1[1].moveUp()
            this.playersTeam1[2].moveUp()

        }
        if (event.keyCode === 83) {
            this.playersTeam1[1].moveDown()
            this.playersTeam1[2].moveDown()
        }
        //DF -Team2 UP=I Down= K
        if (event.keyCode === 73) {
            this.playersTeam2[9].moveUp()
            this.playersTeam2[8].moveUp()
        }
        if (event.keyCode === 75) {
            this.playersTeam2[9].moveDown()
            this.playersTeam2[8].moveDown()
        }
        //MID -Team1 UP=E Down= D
        if (event.keyCode === 69) {
            this.playersTeam1[3].moveUp()
            this.playersTeam1[4].moveUp()
            this.playersTeam1[5].moveUp()
            this.playersTeam1[6].moveUp()
            this.playersTeam1[7].moveUp()
        }
        if (event.keyCode === 68) {
            this.playersTeam1[3].moveDown()
            this.playersTeam1[4].moveDown()
            this.playersTeam1[5].moveDown()
            this.playersTeam1[6].moveDown()
            this.playersTeam1[7].moveDown()
        }
        //MID -Team2 UP=U Down= J
        if (event.keyCode === 85) {
            this.playersTeam2[7].moveUp()
            this.playersTeam2[6].moveUp()
            this.playersTeam2[5].moveUp()
            this.playersTeam2[4].moveUp()
            this.playersTeam2[3].moveUp()
        }
        if (event.keyCode === 74) {
            this.playersTeam2[7].moveDown()
            this.playersTeam2[6].moveDown()
            this.playersTeam2[5].moveDown()
            this.playersTeam2[4].moveDown()
            this.playersTeam2[3].moveDown()
        }

        //FW -Team1 UP=R Down=F
        if (event.keyCode === 82) {
            this.playersTeam1[8].moveUp()
            this.playersTeam1[9].moveUp()
            this.playersTeam1[10].moveUp()
        }
        if (event.keyCode === 70) {
            this.playersTeam1[8].moveDown()
            this.playersTeam1[9].moveDown()
            this.playersTeam1[10].moveDown()
        }
        //FW -Team2 UP=Y Down=H
        if (event.keyCode === 89) {
            this.playersTeam2[2].moveUp()
            this.playersTeam2[1].moveUp()
            this.playersTeam2[0].moveUp()
        }
        if (event.keyCode === 72) {
            this.playersTeam2[2].moveDown()
            this.playersTeam2[1].moveDown()
            this.playersTeam2[0].moveDown()
        }

    });
}

}