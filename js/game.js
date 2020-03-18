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
    console.log(this.playersTeam1)
    this.playersTeam1.forEach(player1=> {
        console.log(player1)
        player1.displayPlayer()
    });
    this.playersTeam2.forEach(player2=> {
        player2.displayPlayer()
    });
}
displayBall(){
    this.ball.updateBall();
    this.ball.displayBall();
}
}